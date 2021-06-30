import React from "react";
import styled from "styled-components";
import { IProps } from "./LazyItem";

const LazyImageBlock = styled.div``;

const LazyImage: React.FC<IProps> = ({ src, name }: IProps) => {
  return (
    <LazyImageBlock>
      <img src={src} alt={name} />
    </LazyImageBlock>
  );
};

export default LazyImage;
