"use client";

import React from "react";
import { CardWrapperItem } from "./CardWrapperItem";
import Emoji from "../Emoji";

const DefaultEmojiComponent = () => (
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
        {Object.entries(Emoji).map(([fieldName, Component]) => (
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

export const GeneralStory = () => <DefaultEmojiComponent />;

const meta = {
  title: "Emoji",
  component: Emoji,
};

export default meta;
