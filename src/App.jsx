import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <h1 className="main-title">Tableau de dashboard</h1>
      
      <nav className="navbar">
        <span className="nav-brand">Tableau de dashboard</span>
        <div className="nav-links">
          <a href="#" className="nav-link">Articles</a>
          <button className="btn-publier">Publier</button>
          <a href="#" className="nav-link">Commentaires</a>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-item">Rediger un article</div>
          <div className="sidebar-item">Categories</div>
          <div className="sidebar-item active">
            <span>⚙️ Nouveau</span>
          </div>
        </aside>

        <main className="content">
          <div className="editor-pane">
            <div className="toolbar">
              <span>🖊️</span>
              <span>📄</span>
              <span>✒️</span>
              <span>𝐁</span>
              <span>🔗</span>
              <span>🤝</span>
              <span>🙌</span>
              <span>🕊️</span>
            </div>

            <h2 className="section-label">Categories</h2>
            <div className="dashed-box"></div>

            <h2 className="section-label">Categories</h2>
            <div className="article-list">
              <div className="article-item" style={{ backgroundColor: '#fee2e2', padding: '10px' }}>Categories</div>
              <div className="article-item">Article</div>
              <div className="article-item">Article</div>
              <div className="article-item">Article</div>
            </div>
          </div>

          <div className="actions-panel">
            <button className="btn-action btn-blue">
              Modifier <span>&gt;</span>
            </button>
            <button className="btn-action btn-red">
              Supprimer
            </button>
            <button className="btn-action btn-white" style={{ border: '2px solid #334155', borderRadius: '12px' }}>
              Nouveau
            </button>
            
            <div style={{ marginTop: 'auto' }}>
              <div className="modifier-simple">
                Modifier <span>&gt;</span>
              </div>
              <button className="btn-action btn-alt-blue">
                Supprimer
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
