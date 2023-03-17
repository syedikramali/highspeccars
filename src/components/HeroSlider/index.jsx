import useScreenWidth from "@/hooks/useScreenWidth";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { map } from "lodash";
import { Children } from "react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function HeroSlider() {
  const { isSm } = useScreenWidth();

  return (
    <Paper
      sx={{
        height: "80vh",
        position: "relative",
        "& *": { userSelect: "none" },
        "& .swiper": { width: "100%", height: "100%" },
        "& .swiper-slide": {
          textAlign: "center",
          fontSize: "18px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .swiper-slide img": {
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          aspectRatio: 16 / 9,
          objectPosition: "center",
        },
      }}
    >
      <Box sx={{ position: "absolute", top: "5%", left: "5%", zIndex: 9999 }}>
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
            // width: { md: "28%", sm: "50%", xs: "100%" },
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
      <Swiper
        loop
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Children.toArray(
          map(
            [
              "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
              "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1125&q=80",
              "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/687653/pexels-photo-687653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            (item) => {
              return (
                <SwiperSlide
                  style={{
                    backgroundImage: `url(${item})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              );
            }
          )
        )}
      </Swiper>
    </Paper>
  );
}

export default HeroSlider;
