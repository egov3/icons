"use client";

import React from "react";
import { CardWrapperItem } from "./CardWrapperItem";
import Basic from "../Basic";

const DefaultBasicComponent = () => (
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
        {Object.entries(Basic).map(([fieldName, Component]) => (
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

export const BasicStory = () => <DefaultBasicComponent />;

const meta = {
  title: "Basic",
  component: Basic,
};

export default meta;
