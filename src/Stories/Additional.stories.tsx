"use client";

import React from "react";
import { CardWrapperItem } from "./CardWrapperItem";
import Additional from "../Additional";

const DefaultAdditionalComponent = () => (
  <CardWrapperItem>
    <div
      style={{
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.entries(Additional).map(([fieldName, Component]) => (
          <div
            key={fieldName}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {fieldName}: <Component key={fieldName} />
          </div>
        ))}
      </div>
    </div>
  </CardWrapperItem>
);

export const AdditionalStory = () => <DefaultAdditionalComponent />;

const meta = {
  title: "Additional",
  component: Additional,
};

export default meta;
