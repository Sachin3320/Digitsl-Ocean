function TimelineYears({ data }) {
  return (
    <div className="relative h-24">
      {data.map((item, index) => (
        <div
          key={item.year}
          className="timeline-year"
          style={{ left: `${(index / (data.length - 1)) * 100}%` }}
        >
          {item.year}
        </div>
      ))}
    </div>
  );
}

export default TimelineYears;
