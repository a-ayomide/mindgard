import React from 'react';

const Tooltip = ({ content, position }: any) => {
  const tooltipStyle = {
    position: 'absolute',
    top: position.y - 70, // Adjust the top position as needed
    left: position.x - 100, // Adjust the left position as needed
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
  };

  return <div style={tooltipStyle}>{content}</div>;
};

export default Tooltip;
