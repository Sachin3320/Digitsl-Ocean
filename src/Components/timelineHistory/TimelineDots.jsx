function TimelineDots({ data, currentIndex, onDotClick }) {
  return (
    <div className="relative w-full h-full">
      {data.map((item, index) => (
        <div
          key={item.year}
          className={`timeline-dot ${index === currentIndex ? "active" : ""}`}
          style={{ left: `${(index / (data.length - 1)) * 100}%` }}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}

export default TimelineDots;
