"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/hero-slide-1.png", alt: "Timber warehouse with stacked lumber ready for packaging" },
  { src: "/hero-slide-2.png", alt: "Wooden export crates and pallets in a warehouse" },
  { src: "/hero-slide-3.png", alt: "Craftsman assembling wooden export packaging in a timber workshop" },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-slides">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className={`hero-image${i === index ? " is-active" : ""}`}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
        />
      ))}
    </div>
  );
}
