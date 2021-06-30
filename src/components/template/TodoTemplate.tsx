import React from "react";
import styled from "styled-components";
import Content from "../layout/Content";
import Side from "../layout/Side";

const TodoTemplateBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  & > div:nth-child(1) {
    border-right: 1px solid #898989;
  }
`;

const TodoTemplate: React.FC = () => {
  return (
    <TodoTemplateBlock>
      <Side />
      <Content />
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
