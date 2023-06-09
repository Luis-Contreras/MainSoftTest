import React, { useMemo } from "react";
import { Chart } from "react-charts";
import { useFetchWeather } from "../../api/weather";
import { Tag, Spin } from "antd";

const COLORS = {
  dry: "#e3db8a",
  comfort: "#8ae38b",
  wet: "#4a4ae9",
};

export const Maps = ({ currentItem }) => {
  const { data, isLoading, error } = useFetchWeather(currentItem);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.dt_txt,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.main.humidity,
      },
    ],
    []
  );

  if (isLoading)
    return (
      <div
        style={{
          margin: " 20px 0",
          marginBottom: "20px",
          padding: "30px 50px",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.05)",
          borderRadius: "4px",
        }}
      >
        <Spin />
      </div>
    );

  if (error)
    return (
      <>
        {error} for Country: {currentItem.country_name}, Please select another
        one{" "}
      </>
    );

  if (!data.list || data.list.length === 0) return <>No data</>;

  return (
    <div
      style={{
        width: "90%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Tag color={COLORS.comfort}>Comfort zone</Tag>
        <Tag color={COLORS.dry}>Too dry</Tag>
        <Tag color={COLORS.wet}>Too wet</Tag>
      </div>
      <div
        style={{
          width: "90%",
          height: "500px",
        }}
      >
        <Chart
          options={{
            data: [{ label: "weather", data: data.list }],
            primaryAxis,
            secondaryAxes,
            interactionMode: "closest",
            getDatumStyle: (datum) => {
              const value = datum.originalDatum.main.humidity;
              const color =
                value > 39 && value < 69
                  ? COLORS.comfort
                  : value > 69
                  ? COLORS.wet
                  : COLORS.dry;
              return {
                rectangle: {
                  fill: color,
                  stroke: "black",
                  strokeWidth: 1,
                },
              };
            },
          }}
        />
      </div>
    </div>
  );
};
