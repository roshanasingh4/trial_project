import React, { useState } from "react";
import Wrapper from "./Wrapper";

export default function SwitchToggle() {
  const [isSelected, setIsselected] = useState(false);

  return (
    <Wrapper>
      <div
        className="outer-wrapper m-auto d-flex justify-content-between align-items-center"
        onClick={() => setIsselected(!isSelected)}
      >
        <span
          style={{
            paddingLeft: "1.5rem",
            zIndex: "1111111",
            position: "relative",
          }}
        >
          Monthly
        </span>
        <span
          style={{
            paddingRight: "1.5rem",
            zIndex: "1111111",
            position: "relative",
          }}
        >
          Annual
        </span>
        <span className={"slider " + (isSelected ? "selected" : "  ")}></span>
      </div>
    </Wrapper>
  );
}
