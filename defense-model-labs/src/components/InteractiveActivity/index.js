import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function InteractiveActivity({ 
  title, 
  description, 
  tasks = [], 
  type = 'checklist',
  children 
}) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  // Load saved state from localStorage on mount
  useEffect(() => {
    const activityId = title.replace(/\s+/g, '-').toLowerCase();
    const saved = localStorage.getItem(`activity-${activityId}`);
    if (saved) {
      try {
        const savedTasks = JSON.parse(saved);
        setCompletedTasks(savedTasks);
      } catch (e) {
        console.error('Error loading saved activity state:', e);
      }
    }
  }, [title]);

  // Dispatch custom event whenever completedTasks changes
  useEffect(() => {
    const event = new CustomEvent('activityProgressChange', {
      detail: {
        total: tasks.length,
        completed: completedTasks.length
      }
    });
    window.dispatchEvent(event);
  }, [completedTasks, tasks.length]);

  const handleTaskComplete = (taskId) => {
    const activityId = title.replace(/\s+/g, '-').toLowerCase();
    let newCompletedTasks;
    
    if (completedTasks.includes(taskId)) {
      newCompletedTasks = completedTasks.filter(id => id !== taskId);
    } else {
      newCompletedTasks = [...completedTasks, taskId];
    }
    
    setCompletedTasks(newCompletedTasks);
    
    // Save to localStorage
    localStorage.setItem(`activity-${activityId}`, JSON.stringify(newCompletedTasks));
  };

  const allTasksComplete = tasks.length > 0 && completedTasks.length === tasks.length;

  return (
    <div className={styles.activityContainer}>
      <div className={styles.activityHeader}>
        <h3>🎯 {title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      
      <div className={styles.activityContent}>
        {type === 'checklist' && tasks.length > 0 && (
          <div className={styles.taskList}>
            {tasks.map((task, index) => (
              <div 
                key={index} 
                className={`${styles.taskItem} ${completedTasks.includes(index) ? styles.completed : ''}`}
                onClick={() => handleTaskComplete(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTaskComplete(index);
                  }
                }}
              >
                <div className={styles.taskCheckbox}>
                  {completedTasks.includes(index) ? '✓' : '○'}
                </div>
                <div className={styles.taskContent}>
                  <div className={styles.taskTitle}>{task.title}</div>
                  {task.description && (
                    <div className={styles.taskDescription}>{task.description}</div>
                  )}
                  {task.hint && completedTasks.includes(index) && (
                    <div className={styles.taskHint}>💡 {task.hint}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {children}

        {allTasksComplete && (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>🎉</span>
            <span>Great job! You've completed all tasks in this activity.</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Made with Bob
