type ToolTipProps = {
  content: string;
  position: {
    x: number;
    y: number;
  };
};

const Tooltip = ({ content, position }: ToolTipProps) => {
  const tooltipStyle = {
    position: 'absolute',
    top: position.y - 70, // Adjust the top position as needed
    left: position.x - 20, // Adjust the left position as needed
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
  };

  return <div style={tooltipStyle as any}>{content}</div>;
};

export default Tooltip;
