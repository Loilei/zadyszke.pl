import React, { useState } from "react";
import RecommendedOffersSlide from "./RecommendedOffersSlide";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";

function RecommendedOffersCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Box mt={10}>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <RecommendedOffersSlide />
        </Carousel.Item>
        <Carousel.Item>
          <RecommendedOffersSlide />
        </Carousel.Item>
        <Carousel.Item>
          <RecommendedOffersSlide />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default RecommendedOffersCarousel;
