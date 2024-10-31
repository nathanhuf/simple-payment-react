import React, { useState, useCallback, useEffect } from "react";
import TicketCard from "../components/TicketCard";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 } from "uuid";

export default function ShowList({ showData }) {
  const [slides, setSlides] = useState(
    showData.map((show, index) => ({
      key: v4(),
      content: (
        <TicketCard
          title={show.title}
          explanation={show.explanation}
          logo={show.logo}
          price={show.price}
          index={index}
        />
      ),
      onClick: () => setGoToSlide(index),
    }))
  );
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(10);
  const [showNavigation, setShowNavigation] = useState(true);

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 37:
          setGoToSlide(goToSlide - 1);
          break;
        case 39:
          setGoToSlide(goToSlide + 1);
          break;
      }
    },
    [goToSlide]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className="App-header">Show Tickets</div>
      <div className="App-body">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.slow}
        />
      </div>
    </>
  );
}
