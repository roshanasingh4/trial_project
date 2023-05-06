import React from "react";
import Wrapper from "./Wrapper";

export default function BusinessCard({ heading, image, content, alt }) {
  return (
    <Wrapper>
      <div className="d-flex flex-column justify-content-center align-items-center card-container">
        <h3 className="card-head">{heading}</h3>
        <img className="img-fluid" src={image} alt={alt} />
        <p className="card-content">{content}</p>
      </div>
    </Wrapper>
  );
}
