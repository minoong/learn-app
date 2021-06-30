import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      Header
      <div className="current">1</div>
    </HeaderBlock>
  );
};

export default Header;
