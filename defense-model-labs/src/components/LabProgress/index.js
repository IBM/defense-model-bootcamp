import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function LabProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Function to calculate progress from both checkboxes and interactive activities
    const calculateProgress = () => {
      // Count regular checkboxes
      const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
      const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked).length;
      
      // Count interactive activity tasks
      let totalActivityTasks = 0;
      let completedActivityTasks = 0;
      
      // Get all activity states from localStorage
      const activityKeys = Object.keys(localStorage).filter(key => key.startsWith('activity-'));
      
      // Count tasks from all InteractiveActivity components on the page
      const activityContainers = document.querySelectorAll('[class*="activityContainer"]');
      activityContainers.forEach((container) => {
        const taskItems = container.querySelectorAll('[class*="taskItem"]');
        totalActivityTasks += taskItems.length;
        
        const completedItems = container.querySelectorAll('[class*="taskItem"][class*="completed"]');
        completedActivityTasks += completedItems.length;
      });
      
      const totalTasks = checkboxes.length + totalActivityTasks;
      const completedTasks = checkedCheckboxes + completedActivityTasks;
      
      if (totalTasks === 0) return 0;
      return Math.round((completedTasks / totalTasks) * 100);
    };

    // Initial calculation
    const updateProgress = () => {
      setProgress(calculateProgress());
    };

    // Event handler for checkbox changes
    const handleCheckboxChange = () => {
      updateProgress();
      // Save checkbox state to localStorage
      const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
      const checkboxStates = Array.from(checkboxes).map(cb => ({
        id: cb.id || cb.parentElement.textContent.trim(),
        checked: cb.checked
      }));
      localStorage.setItem('labProgress', JSON.stringify(checkboxStates));
    };

    // Event handler for activity progress changes
    const handleActivityProgressChange = () => {
      updateProgress();
    };

    // Add event listeners to all checkboxes
    const addCheckboxListeners = () => {
      const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
      });
    };

    // Restore checkbox states from localStorage
    const restoreCheckboxStates = () => {
      const saved = localStorage.getItem('labProgress');
      if (saved) {
        try {
          const checkboxStates = JSON.parse(saved);
          const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
          checkboxes.forEach((checkbox) => {
            const id = checkbox.id || checkbox.parentElement.textContent.trim();
            const savedState = checkboxStates.find(state => state.id === id);
            if (savedState) {
              checkbox.checked = savedState.checked;
            }
          });
        } catch (e) {
          console.error('Error restoring checkbox states:', e);
        }
      }
    };

    // Initial setup with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      restoreCheckboxStates();
      addCheckboxListeners();
      updateProgress();
    }, 100);

    // Listen for custom events from InteractiveActivity components
    window.addEventListener('activityProgressChange', handleActivityProgressChange);

    // Use MutationObserver to detect when new checkboxes or activities are added to the DOM
    const observer = new MutationObserver(() => {
      restoreCheckboxStates();
      addCheckboxListeners();
      updateProgress();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('activityProgressChange', handleActivityProgressChange);
      const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', handleCheckboxChange);
      });
    };
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.progressLabel}>Step Progress</span>
        <span className={styles.progressPercentage}>{progress}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
          data-progress={progress}
        />
      </div>
    </div>
  );
}

// Made with Bob
