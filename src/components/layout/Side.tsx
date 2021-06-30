import React from "react";
import styled from "styled-components";

const SideBlock = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100%;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Side: React.FC = () => {
  return <SideBlock>Side</SideBlock>;
};

export default Side;
