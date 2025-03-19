import React, { useState } from "react";
import HeroSection from "./Pages/HeroSection";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Testimonial from "./Components/Testimonials/Testimonials";
import TimelineSlider from "./Components/timelineHistory/TimelineSlider";
import "./App.css";

export const timelineData = [
  {
    year: 1977,
    events: [
      {
        title: "Birth of a Silicon Valley startup",
        description:
          "Engineers Larry Ellison, Bob Miner, and Ed Oates found Software Development Laboratories. Their first office is 900 square feet in Santa Clara, California.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora1.PNG-C5nDi99mMMwZIvcfoPEuJ7I6pitb1u.png",
      },
    ],
  },
  {
    year: 1982,
    events: [
      {
        title: "Oracle sees the future",
        description:
          "The company changes its name to Oracle Corporation from Relational Software Inc. (formerly SDL).",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora1.PNG-C5nDi99mMMwZIvcfoPEuJ7I6pitb1u.png",
      },
    ],
  },
  {
    year: 1989,
    events: [
      {
        title: "Moving on up",
        description:
          "Oracle debuts on the S&P 500, outgrows its old headquarters, and moves to Redwood Shores, California.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora2.PNG-LXszia8NNT3Qq5woTLAiWu6QYkd4Zn.png",
      },
    ],
  },
  {
    year: 1992,
    events: [
      {
        title: "Oracle celebrates 15 years and Oracle7 release",
        description:
          "There's lots to celebrate with the release of the game-changing Oracle7 database and the company's 15th anniversary.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora2.PNG-LXszia8NNT3Qq5woTLAiWu6QYkd4Zn.png",
      },
    ],
  },
  {
    year: 1995,
    events: [
      {
        title: "Harnessing the power of the internet",
        description:
          "CEO Larry Ellison introduces a product strategy for delivering Oracle software via the internet.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora2.PNG-LXszia8NNT3Qq5woTLAiWu6QYkd4Zn.png",
      },
    ],
  },
  {
    year: 2005,
    events: [
      {
        title: "Oracle acquires PeopleSoft",
        description:
          "Oracle kicks off a Silicon Valley high-tech acquisition trend by buying a leader in HR and ERP apps.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora3.PNG-dB9j8SlLQs5GVECIfdUTTLlifGXZ1x.png",
      },
    ],
  },
  {
    year: 2007,
    events: [
      {
        title: "Oracle at 30 continues to grow and innovate",
        description:
          "Oracle turns 30, with revenues of US$18B, 65,000 employees, and 275,000 customers in more than 145 countries.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora3.PNG-dB9j8SlLQs5GVECIfdUTTLlifGXZ1x.png",
      },
    ],
  },
  {
    year: 2010,
    events: [
      {
        title: "Hardware and software, engineered to work together",
        description:
          "Oracle acquires Sun Microsystems, cementing its strategy to engineer hardware and software together, and also becomes the steward of Java.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora3.PNG-dB9j8SlLQs5GVECIfdUTTLlifGXZ1x.png",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: "Oracle Database gets a jolt of AI",
        description:
          "The 23ai version comes with AI Vector Search and hundreds of other new features.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora4.PNG-OzxupgqezQlKBKIPVdEQz7yRcjdqWi.png",
      },
      {
        title: "Endless possibilities",
        description: "",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ora4.PNG-OzxupgqezQlKBKIPVdEQz7yRcjdqWi.png",
      },
    ],
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Testimonial />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-16">A history of possibilities</h1>

        <TimelineSlider
          data={timelineData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default App;
