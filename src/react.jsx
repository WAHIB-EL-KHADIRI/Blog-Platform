import React from 'react';

const PremiumComponent = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to React</h2>
      <p style={textStyle}>
        This is your custom <code>react.jsx</code> component, 
        designed with premium aesthetics and modern logic.
      </p>
      <div style={glowStyle}></div>
    </div>
  );
};

const containerStyle = {
  padding: '2.5rem',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  margin: '1.5rem auto',
  maxWidth: '500px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

const titleStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const textStyle = {
  color: '#94a3b8',
  lineHeight: '1.6',
};

const glowStyle = {
  position: 'absolute',
  top: '-50%',
  left: '-50%',
  width: '200%',
  height: '200%',
  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
  pointerEvents: 'none',
  zIndex: -1,
};

export default PremiumComponent;
