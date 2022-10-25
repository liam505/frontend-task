import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-height: 707px) {
    height: 95%;
    width: auto;
  }
`;

export const Image = ({ imageSrc, caption }) => {
  return <StyledImage src={imageSrc} alt={caption} />;
};
