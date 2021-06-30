import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CallbackBlock = styled.div``;

const Callback: React.FC = () => {
  return (
    <CallbackBlock>
      <div>OK</div>
    </CallbackBlock>
  );
};

export default Callback;
