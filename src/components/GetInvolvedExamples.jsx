import React from 'react';
import { useNavigate } from 'react-router-dom';
import EnhancedButton from './EnhancedButton';

// Example component showing different ways to use the enhanced Get Involved buttons
const GetInvolvedExamples = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', background: '#f8fafc' }}>
      <h2>Enhanced "Get Involved" Button Examples</h2>
      
      {/* Primary CTA */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Primary Call-to-Action</h3>
        <EnhancedButton 
          variant="primary" 
          size="large"
          icon="🎓"
          trackingLabel="Join HOPE3 - Primary CTA"
          className="enhanced-button--pulse"
          onClick={() => navigate('/join-hope3')}
        >
          Join HOPE3 Today
        </EnhancedButton>
      </div>

      {/* Secondary Actions */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Secondary Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <EnhancedButton 
            variant="secondary" 
            size="medium"
            icon="💝"
            trackingLabel="Make a Gift"
            onClick={() => alert('Make a Gift clicked!')}
          >
            Make a Gift
          </EnhancedButton>
          <EnhancedButton 
            variant="outline" 
            size="medium"
            icon="🤝"
            trackingLabel="Volunteer"
            onClick={() => alert('Volunteer clicked!')}
          >
            Volunteer
          </EnhancedButton>
        </div>
      </div>

      {/* Loading State */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Loading State</h3>
        <EnhancedButton 
          variant="primary" 
          size="medium"
          loading={true}
          trackingLabel="Processing Application"
        >
          Processing Application...
        </EnhancedButton>
      </div>

      {/* Disabled State */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Disabled State</h3>
        <EnhancedButton 
          variant="primary" 
          size="medium"
          disabled={true}
          trackingLabel="Application Closed"
        >
          Applications Closed
        </EnhancedButton>
      </div>

      {/* Small Buttons */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Small Buttons</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <EnhancedButton 
            variant="primary" 
            size="small"
            trackingLabel="Quick Join"
          >
            Quick Join
          </EnhancedButton>
          <EnhancedButton 
            variant="secondary" 
            size="small"
            trackingLabel="Learn More"
          >
            Learn More
          </EnhancedButton>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedExamples;