import React from "react";
import styled from "styled-components";
import { images } from "../static/Images";
import LazyItem from "./LazyItem";

const LazyWrapperBlock = styled.div``;

const LazyWrapper: React.FC = () => {
  return (
    <LazyWrapperBlock>
      <div>
        {images.map((image) => (
          <LazyItem key={image.id} src={image.src} name={image.name} />
        ))}
      </div>
    </LazyWrapperBlock>
  );
};

export default LazyWrapper;
