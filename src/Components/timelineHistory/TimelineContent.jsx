function TimelineContent({ data, currentIndex }) {
  return (
    <div className="relative h-[300px] mb-16">
      {data.map((item, index) => (
        <div
          key={item.year}
          className={`timeline-content ${
            index === currentIndex ? "active" : ""
          }`}
        >
          {item.events.map((event, eventIndex) => (
            <div
              key={eventIndex}
              className="flex flex-col md:flex-row gap-8 mb-8"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TimelineContent;
