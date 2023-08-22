import useScreenWidth from "@/hooks/useScreenWidth";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { map } from "lodash";
import Image from "next/image";
import React, { Children } from "react";

function HeroSlider() {
  const { isSm } = useScreenWidth();

  return (
    <Box position={"relative"} id="home-page-hero-slider">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "fade",
          perPage: 1,
          height: isSm ? "60vh" : "80vh",
          pagination: false,
          arrows: false,
          autoplay: true,
          speed: 1,
        }}
      >
        {Children.toArray(
          map(
            [
              "/assets/car-1.jpg",
              "/assets/car-2.jpg",
              "/assets/car-3.jpg",
              "/assets/car-4.jpg",
            ],
            (item) => {
              return (
                <SplideSlide>
                  <Image
                    src={item}
                    alt={item}
                    height={2000}
                    width={1800}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SplideSlide>
              );
            }
          )
        )}
      </Splide>

      <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
        <Typography
          fontWeight="bolder"
          variant={isSm ? "h3" : "h1"}
          color="#fff"
        >
          WELCOME TO <br /> HIGH SPEC CARS
        </Typography>
        <Divider
          sx={{
            mb: 3,
            mt: 1,
            background: "#fff",
            height: isSm ? "15px" : "30px",
            width: { md: "10%", xs: "30%" },
          }}
        />
        <Typography
          variant={isSm ? "h5" : "h4"}
          fontWeight="bolder"
          color="#fff"
          mb={3}
        >
          Experience Luxury Driven Performance
        </Typography>
        <Button
          size={isSm ? "small" : "large"}
          sx={{
            color: "#000",
            backgroundColor: "#fff",
            borderRadius: "10%",
            fontWeight: "bolder",
            fontSize: isSm ? "16px" : "20px",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          Browse our showroom
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSlider;
