import React from 'react';
import styled from 'styled-components';

interface styledProps {
  isActive: boolean;
}

const SlideBlock = styled.img<styledProps>`
  width: 100%;
  height: 100%;
  transform: all 0.3s ease-in-out;

  /* ${(props) =>
    props.isActive === true
      ? `transform: scale( 1.0, 1.0 )`
      : `transform: scale( 0.7, 0.7 )`}; */
`;

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isActive: boolean;
}

const Slide: React.FC<IProps> = ({ isActive, ...props }) => {
  return <SlideBlock {...props} isActive={isActive} />;
};

export default Slide;
