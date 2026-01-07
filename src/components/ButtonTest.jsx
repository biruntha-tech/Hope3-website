import React from 'react';
import { useNavigate } from 'react-router-dom';

// Simple test component to verify basic button functionality
const ButtonTest = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h3>Button Test - Basic Implementation</h3>
      
      {/* Fallback buttons using standard HTML/CSS if EnhancedButton has issues */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button 
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            console.log('Join HOPE3 clicked');
            navigate('/join-hope3');
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
          }}
        >
          🎓 Join HOPE3
        </button>
        
        <button 
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#8b5cf6',
            border: '2px solid #8b5cf6',
            padding: '12px 24px',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => console.log('Volunteer clicked')}
          onMouseOver={(e) => {
            e.target.style.background = '#8b5cf6';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = '#8b5cf6';
          }}
        >
          🤝 Volunteer
        </button>
      </div>
    </div>
  );
};

export default ButtonTest;