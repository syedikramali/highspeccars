/* eslint-disable react/display-name */
import axios from "axios";
import { useQuery } from "react-query";
import useScreenWidth from "@/hooks/useScreenWidth";
import { includes, map } from "lodash";
import { useEffect, useState } from "react";

const engine =
  (Component) =>
  ({ ...props }) => {
    const { values, setFieldValue } = props;

    const {
      isLoading,
      error,
      data: { data } = [],
    } = useQuery(
      ["make-model", values.make],
      () =>
        axios({
          method: "post",
          maxBodyLength: Infinity,
          url: "https://www.autotrader.co.uk/at-graphql?opname=SearchFormFacetsQuery",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify([
            {
              operationName: "SearchFormFacetsQuery",
              variables: {
                advertQuery: {
                  advertisingLocations: ["at_cars"],
                  advertClassification: ["standard"],
                  make: [values.make],
                  homeDeliveryAdverts: null,
                  distance: null,
                  clickAndCollectOrHomeDeliveryAvailable: null,
                },
                facets: ["model"],
              },
              query:
                "query SearchFormFacetsQuery($advertQuery: AdvertQuery!, $facets: [SearchFacetName]) {\n  search {\n    adverts(advertQuery: $advertQuery) {\n      advertList {\n        totalElements\n        __typename\n      }\n      facets(facets: $facets) {\n        name\n        values {\n          name\n          value\n          count\n          selected\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
            },
          ]),
        }),
      {
        enabled: Boolean(values.make),
        onSuccess: (data) => {
          if (
            !includes(
              map(
                data?.data?.[0]?.data?.search?.adverts?.facets?.[0]?.values,
                "name"
              ),
              values.model
            )
          )
            setFieldValue("model", "");
        },
      }
    );

    const { isSm, isXs } = useScreenWidth();

    return (
      <Component
        {...{
          ...props,
          models: map(
            data?.[0]?.data?.search?.adverts?.facets?.[0]?.values,
            "name"
          ),
          isSm,
          isXs,
          isLoading,
        }}
      />
    );
  };

engine.displayName = "Engine";

export default engine;
