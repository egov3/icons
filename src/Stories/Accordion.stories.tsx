"use client";

import React, { useState } from "react";
import { AttachFileAdd } from "../Additional/AttachFileAdd";
import { CardWrapperItem } from "./CardWrapperItem";

const DefaultAccordionComponent = () => {
  const [open, setOpen] = useState(true);
  return (
    <CardWrapperItem>
      <div
        style={{
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AttachFileAdd />
      </div>
    </CardWrapperItem>
  );
};

export const AccordionStory = () => <DefaultAccordionComponent />;

const meta = {
  title: "AttachFileAdd",
  component: AttachFileAdd,
};

export default meta;
