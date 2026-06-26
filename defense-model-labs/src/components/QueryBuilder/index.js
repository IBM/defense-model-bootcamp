import React, { useState } from 'react';
import styles from './styles.module.css';

const sampleQueries = [
  {
    category: "Document Overview",
    queries: [
      "What is the main topic of this document?",
      "Can you provide a brief summary?",
      "What type of document is this?",
      "When was this document created?"
    ]
  },
  {
    category: "Key Information",
    queries: [
      "What are the key findings?",
      "What recommendations are provided?",
      "Are there any specific dates mentioned?",
      "What locations are referenced?"
    ]
  },
  {
    category: "Deep Analysis",
    queries: [
      "What are the main entities mentioned?",
      "Can you create a timeline of events?",
      "What metrics or statistics are included?",
      "What are the action items?"
    ]
  }
];

export default function QueryBuilder() {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [customQuery, setCustomQuery] = useState('');
  const [queryHistory, setQueryHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('suggested');

  const handleQuerySelect = (query) => {
    setSelectedQuery(query);
    setCustomQuery(query);
  };

  const handleSubmitQuery = () => {
    if (customQuery.trim()) {
      setQueryHistory([...queryHistory, {
        query: customQuery,
        timestamp: new Date().toLocaleTimeString()
      }]);
      setCustomQuery('');
      setSelectedQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuery();
    }
  };

  return (
    <div className={styles.queryBuilder}>
      <div className={styles.header}>
        <h3>🔍 Interactive Query Builder</h3>
        <p>Try asking questions about your document. Click a suggested query or write your own!</p>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'suggested' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('suggested')}
        >
          💡 Suggested Queries
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'custom' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          ✏️ Custom Query
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'history' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📜 Query History ({queryHistory.length})
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'suggested' && (
          <div className={styles.suggestedQueries}>
            {sampleQueries.map((category, idx) => (
              <div key={idx} className={styles.queryCategory}>
                <h4>{category.category}</h4>
                <div className={styles.queryList}>
                  {category.queries.map((query, qIdx) => (
                    <button
                      key={qIdx}
                      className={`${styles.queryButton} ${selectedQuery === query ? styles.selected : ''}`}
                      onClick={() => handleQuerySelect(query)}
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'custom' && (
          <div className={styles.customQuery}>
            <textarea
              className={styles.queryInput}
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question here... (Press Enter to submit)"
              rows={4}
            />
            <button 
              className={styles.submitButton}
              onClick={handleSubmitQuery}
              disabled={!customQuery.trim()}
            >
              Ask Question →
            </button>
          </div>
        )}

        {activeTab === 'history' && (
          <div className={styles.queryHistory}>
            {queryHistory.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No queries yet. Start asking questions!</p>
              </div>
            ) : (
              <div className={styles.historyList}>
                {queryHistory.map((item, idx) => (
                  <div key={idx} className={styles.historyItem}>
                    <div className={styles.historyQuery}>{item.query}</div>
                    <div className={styles.historyTime}>{item.timestamp}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedQuery && activeTab === 'suggested' && (
        <div className={styles.selectedQueryPreview}>
          <div className={styles.previewLabel}>Selected Query:</div>
          <div className={styles.previewQuery}>{selectedQuery}</div>
          <button 
            className={styles.useQueryButton}
            onClick={handleSubmitQuery}
          >
            Use This Query →
          </button>
        </div>
      )}
    </div>
  );
}

// Made with Bob
