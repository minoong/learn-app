import React, { lazy, Suspense } from "react";
import styled from "styled-components";

const LazyItemBlock = styled.div``;

export interface IProps {
  src: string;
  name: string;
}

const LazyImage = lazy(() => import("./LazyImage"));

const LazyItem: React.FC<IProps> = ({ src, name }: IProps) => {
  return (
    <LazyItemBlock>
      <div>
        <Suspense fallback={<div>...loading</div>}>
          <LazyImage src={src} name={name} />
        </Suspense>
      </div>
    </LazyItemBlock>
  );
};

export default LazyItem;
