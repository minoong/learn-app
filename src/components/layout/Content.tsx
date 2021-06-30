import React from "react";
import styled from "styled-components";

const ContentBlock = styled.div`
  flex-grow: 1;
  height: 100%;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Content: React.FC = () => {
  return <ContentBlock>content</ContentBlock>;
};

export default Content;
