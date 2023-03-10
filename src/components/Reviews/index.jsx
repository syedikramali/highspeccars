import axios from "axios";
import React, { Children, useRef, useState } from "react";
import { useQuery } from "react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import {
  Box,
  Container,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { map } from "lodash";
import { Minimize, VerifiedRounded } from "@mui/icons-material";
import moment from "moment/moment";
import useThemeMode from "@/hooks/useThemeMode";
import useScreenWidth from "@/hooks/useScreenWidth";

var payload = JSON.stringify([
  {
    operationName: "DealerReviewsSummaryQuery",
    variables: {
      dealerId: "10035605",
      limit: 1,
    },
    query:
      'query DealerReviewsSummaryQuery($dealerId: String!) {\n  search {\n    dealer(dealerId: $dealerId) {\n      allReviews: acceptedDealerReviews(limit: 1) {\n        totalLiveReviews\n        averageLiveReviewRating\n        sourceSummaries {\n          source\n          averageLiveReviewRating\n          totalLiveReviews\n          sourceUrl\n          __typename\n        }\n        dealerReviewList {\n          size\n          __typename\n        }\n        starSummaries {\n          starRating\n          totalReviews\n          __typename\n        }\n        __typename\n      }\n      fiveStarReviews: acceptedDealerReviews(\n        starRating: "5"\n        sortOrder: "newest-first"\n        summaryRequired: false\n      ) {\n        dealerReviewList {\n          size\n          reviews {\n            text\n            title\n            reviewerName\n            overallRating\n            source\n            verified\n            created\n            updated\n            reply {\n              replyText\n              updated\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
  },
  {
    operationName: "DealerReviewsQuery",
    variables: {
      dealerId: "10035605",
      limit: 5,
      sortOrder: "verified-first",
      summaryRequired: false,
      returnReviewsFrom: "forever",
    },
    query:
      "query DealerReviewsQuery($dealerId: String!, $limit: Int, $sortOrder: String, $cursor: String, $starRatings: String, $summaryRequired: Boolean, $returnReviewsFrom: String, $text: String) {\n  search {\n    dealer(dealerId: $dealerId) {\n      name\n      acceptedDealerReviews(\n        limit: $limit\n        cursor: $cursor\n        sortOrder: $sortOrder\n        starRating: $starRatings\n        summaryRequired: $summaryRequired\n        returnReviewsFrom: $returnReviewsFrom\n        text: $text\n      ) {\n        totalLiveReviews\n        averageLiveReviewRating\n        sourceSummaries {\n          source\n          averageLiveReviewRating\n          totalLiveReviews\n          sourceUrl\n          __typename\n        }\n        dealerReviewList {\n          size\n          nextCursor\n          reviews {\n            text\n            title\n            reviewerName\n            overallRating\n            source\n            verified\n            created\n            updated\n            reply {\n              replyText\n              updated\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
  },
]);

var config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://www.autotrader.co.uk/at-graphql?opname=DealerReviewsSummaryQuery&opname=DealerReviewsQuery",
  headers: {
    "Content-Type": "application/json",
  },
  data: payload,
};

function Reviews() {
  const {
    isLoading,
    error,
    data: { data } = [],
  } = useQuery("repoData", () => axios(config));
  console.log(
    "🚀 ~ file: index.jsx:40 ~ Reviews ~ data:",
    data?.[0].data?.search?.dealer?.fiveStarReviews?.dealerReviewList?.reviews
  );

  const { isSm, isXs } = useScreenWidth();
  console.log("🚀 ~ file: index.jsx:71 ~ Reviews ~ isSm:", isSm);

  return (
    <Container sx={{ my: 4 }}>
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
      <Box sx={{ height: "50vh" }}>
        <Swiper
          slidesPerView={isXs ? 1 : isSm ? 2 : 3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: isSm || isXs ? true : false,
          }}
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "3px",
            "--swiper-pagination-bullet-width": "15px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination]}
          autoplay={{ delay: 5 }}
          height="100%"
        >
          {Children.toArray(
            map(
              data?.[0].data?.search?.dealer?.fiveStarReviews?.dealerReviewList
                ?.reviews,
              (review) => {
                return (
                  <SwiperSlide>
                    <Box
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
                  </SwiperSlide>
                );
              }
            )
          )}
        </Swiper>
      </Box>
    </Container>
  );
}

export default Reviews;
