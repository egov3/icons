"use client";

import React from "react";
import { CardWrapperItem } from "./CardWrapperItem";
import General from "../General";

const DefaultGeneralComponent = () => (
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
        {Object.entries(General).map(([fieldName, Component]) => (
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

export const GeneralStory = () => <DefaultGeneralComponent />;

const meta = {
  title: "General",
  component: General,
};

export default meta;
