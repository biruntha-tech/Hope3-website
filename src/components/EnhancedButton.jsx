import React, { useState } from 'react';
import './EnhancedButton.css';

const EnhancedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = null,
  onClick = () => {},
  disabled = false,
  loading = false,
  className = '',
  trackingLabel = '',
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    if (disabled || loading) return;
    
    // Add click animation
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    // Track engagement
    if (trackingLabel) {
      console.log(`Button clicked: ${trackingLabel}`);
      // Here you could integrate with analytics
    }
    
    onClick(e);
  };

  const buttonClasses = [
    'enhanced-button',
    `enhanced-button--${variant}`,
    `enhanced-button--${size}`,
    isClicked ? 'enhanced-button--clicked' : '',
    loading ? 'enhanced-button--loading' : '',
    disabled ? 'enhanced-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <div className="enhanced-button__spinner" />}
      {icon && <span className="enhanced-button__icon">{icon}</span>}
      <span className="enhanced-button__text">{children}</span>
      <div className="enhanced-button__ripple" />
    </button>
  );
};

export default EnhancedButton;