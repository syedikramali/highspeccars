/* eslint-disable @next/next/no-img-element */
import { VerifiedRounded } from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { isEmpty, map } from "lodash";
import moment from "moment";
import { Children } from "react";
import engine from "./engine";

function Reviews({ data, isSm, isXs, isLoading }) {
  if (isEmpty(data)) return null;

  return (
    <Box px={1} pt={4} id="reviews-slider">
      <Container>
        <Typography
          variant="h5"
          align="center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            "&:after, &:before": {
              backgroundColor: "text.primary",
              content: "''",
              width: "100%",
              height: 1.5,
            },
            "&:after": {
              marginLeft: 2,
            },
            "&:before": {
              marginRight: 2,
            },
          }}
          noWrap
        >
          Our Testimonials
        </Typography>
      </Container>

      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: isSm || isXs ? 1 : 3,
          height: "fit-content",
          gap: "3rem",
          pagination: isSm || isXs ? true : false,
          arrows: isSm || isXs ? false : true,
          autoplay: true,
        }}
        style={{ alignItems: "center" }}
      >
        {Children.toArray(
          map(data, (review) => {
            return (
              <SplideSlide>
                <Box
                  my={"auto"}
                  p={2}
                  textAlign="center"
                  component={Paper}
                  borderRadius={5}
                >
                  <Stack
                    direction="row"
                    justifyContent={"center"}
                    alignItems="center"
                    spacing={0.5}
                  >
                    <Typography variant="h6" textTransform="uppercase">
                      {review?.reviewerName}
                    </Typography>
                    {review?.verified ? (
                      <VerifiedRounded color="primary" fontSize="small" />
                    ) : null}
                  </Stack>
                  <Typography mb={2} variant="body2" color="text.secondary">
                    - {moment(review?.created).fromNow()}
                  </Typography>
                  <Rating
                    name="size-large"
                    value={review?.overallRating}
                    readOnly
                  />
                  <Typography mb={2} variant="body2" noWrap>
                    {review?.title}
                  </Typography>
                  <Box
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      color: "text.secondary",
                    }}
                  >
                    {review?.text}
                  </Box>
                </Box>
              </SplideSlide>
            );
          })
        )}
      </Splide>
    </Box>
  );
}

export default engine(Reviews);
