/* eslint-disable react/display-name */
import axios from "axios";
import { useQuery } from "react-query";
import useScreenWidth from "@/hooks/useScreenWidth";

const engine =
  (Component) =>
  ({ ...props }) => {
    var payload = JSON.stringify([
      {
        operationName: "DealerReviewsQuery",
        variables: {
          dealerId: "10035605",
          sortOrder: "verified-first",
          summaryRequired: false,
          returnReviewsFrom: "forever",
        },
        query:
          "query DealerReviewsQuery($dealerId: String!, $limit: Int, $sortOrder: String, $returnReviewsFrom: String) {\n  search {\n    dealer(dealerId: $dealerId) {\n      acceptedDealerReviews(limit: $limit, sortOrder: $sortOrder, returnReviewsFrom: $returnReviewsFrom) {\n        dealerReviewList {\n          reviews {\n            text\n            title\n            reviewerName\n            overallRating\n            source\n            verified\n            created\n            updated\n            reply {\n              replyText\n              updated\n            }\n          }\n        }\n      }\n    }\n  }\n}",
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

    const {
      isLoading,
      error,
      data: { data } = [],
    } = useQuery("repoData", () => axios(config));
    const { isSm, isXs } = useScreenWidth();

    return (
      <Component
        {...{
          ...props,
          data:
            data?.[0]?.data?.search?.dealer?.acceptedDealerReviews
              ?.dealerReviewList?.reviews || [],
          isSm,
          isXs,
          isLoading,
        }}
      />
    );
  };

engine.displayName = "Engine";

export default engine;
