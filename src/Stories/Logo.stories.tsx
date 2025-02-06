"use client";

import React from "react";
import { CardWrapperItem } from "./CardWrapperItem";
import Logo from "../Logo";

const DefaultLogoComponent = () => (
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
        {Object.entries(Logo).map(([fieldName, Component]) => (
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

export const LogoStory = () => <DefaultLogoComponent />;

const meta = {
  title: "Logo",
  component: Logo,
};

export default meta;
