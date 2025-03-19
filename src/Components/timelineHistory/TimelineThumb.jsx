function TimelineThumb({ data, currentIndex, onMouseDown, onTouchStart }) {
  const position = (currentIndex / (data.length - 1)) * 100;

  return (
    <div
      className="timeline-thumb"
      style={{ left: `${position}%` }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    />
  );
}

export default TimelineThumb;
