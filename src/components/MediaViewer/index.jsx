import React, { Children, createRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { map } from "lodash";
import { getMedia } from "@/firebase";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { Box } from "@mui/material";

function MediaViewer({ media = [], carId }) {
  const mainRef = createRef();
  const thumbsRef = createRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions = {
    type: "fade",
    rewind: true,
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "0.5rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  const renderSlides = () => {
    return Children.toArray(
      map(media, (mediaId) => (
        <SplideSlide key={mediaId}>
          <Image
            height={600}
            width={800}
            src={getMedia(carId, mediaId)}
            alt={mediaId}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              aspectRatio: 16 / 9,
            }}
          />
        </SplideSlide>
      ))
    );
  };

  return (
    <div>
      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {renderSlides()}
      </Splide>

      <Box
        sx={{
          "& .splide__slide.is-active": {
            border: "4px solid red!important",
          },
        }}
      >
        <Splide
          options={thumbsOptions}
          ref={thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          {renderSlides()}
        </Splide>
      </Box>
    </div>
  );
}

export default MediaViewer;
