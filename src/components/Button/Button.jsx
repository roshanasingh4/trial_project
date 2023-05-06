import React from "react";
import Wrapper from "./Wrapper";

function Button({
  text,
  children,
  primary,
  textcolor,
  onClick,
  disabled,
  className,
  type,
  bg,
  width,
  weight,
}) {
  return (
    <Wrapper
      primary={primary}
      textcolor={textcolor}
      bg={bg}
      disabled={disabled}
      onClick={onClick}
      className={className}
      width={width}
      type={type}
      weight={weight}
    >
      {children ? children : text}
    </Wrapper>
  );
}

export default Button;
