import { useRef, useEffect } from "react";
import TimelineContent from "./TimelineContent";
import TimelineYears from "./TimelineYears";
import TimelineDots from "./TimelineDots";
import TimelineThumb from "./TimelineThumb";

function TimelineSlider({ data, currentIndex, setCurrentIndex }) {
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startLeftRef = useRef(0);

  // Move to specific index
  const moveToIndex = (index) => {
    if (index >= 0 && index < data.length) {
      setCurrentIndex(index);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyNavigation = (e) => {
      if (e.key === "ArrowRight" && currentIndex < data.length - 1) {
        moveToIndex(currentIndex + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        moveToIndex(currentIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyNavigation);
    return () => {
      window.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [currentIndex, data.length]);

  // Start dragging
  const startDrag = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;

    // Calculate current left position as percentage
    const position = (currentIndex / (data.length - 1)) * 100;
    startLeftRef.current = position;

    // Prevent default behavior
    e.preventDefault();
  };

  // Dragging
  const drag = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;

    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - startXRef.current;
    const trackWidth = trackRef.current.offsetWidth;
    const deltaPercent = (deltaX / trackWidth) * 100;
    let newLeft = startLeftRef.current + deltaPercent;

    // Constrain to track
    newLeft = Math.max(0, Math.min(100, newLeft));

    // Find closest index
    const closestIndex = Math.round((newLeft / 100) * (data.length - 1));

    // Only move if index changed
    if (closestIndex !== currentIndex) {
      moveToIndex(closestIndex);
    }

    e.preventDefault();
  };

  // End dragging
  const endDrag = () => {
    isDraggingRef.current = false;
  };

  // Add and remove event listeners for dragging
  useEffect(() => {
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", endDrag);

    return () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchmove", drag);
      document.removeEventListener("touchend", endDrag);
    };
  }, [currentIndex]);

  return (
    <div className="timeline-container relative mb-24">
      {/* Timeline content sections */}
      <TimelineContent data={data} currentIndex={currentIndex} />

      {/* Years display */}
      <TimelineYears data={data} />

      {/* Timeline track and slider */}
      <div className="timeline-track" ref={trackRef}>
        <TimelineDots
          data={data}
          currentIndex={currentIndex}
          onDotClick={moveToIndex}
        />
        <TimelineThumb
          data={data}
          currentIndex={currentIndex}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        />
      </div>
    </div>
  );
}

export default TimelineSlider;
