import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Slide from '../../components/common/Slide';
import Panibottle from '../../images/panibottle.jpg';
import useInterval from '../../lib/hooks/useInterval';

const SlideContainerBlock = styled.div`
  width: 60%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5rem 2rem;
  color: coral;
  cursor: pointer;
  &:hover {
    transform: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SlideContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    slideRef.current!.style.transition = `all 0.5s ease-in-out`;
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`;

    return () => console.log('ok');
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide >= dummyData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(() => dummyData.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleMouseOver = () => setIsRunning((state) => false);
  const handleMouseLeave = () => setIsRunning((state) => true);

  function next() {
    if (currentSlide >= dummyData.length - 1) {
      setCurrentSlide((state) => 0);
    } else {
      setCurrentSlide((state) => currentSlide + 1);
    }
  }

  useInterval(next, isRunning ? 1500 : null);

  return (
    <SlideContainerBlock>
      {currentSlide}
      <SlideWrapper ref={slideRef} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {dummyData.map((_, index) => (
          <Slide src={_} key={index} isActive={currentSlide === index} />
        ))}
      </SlideWrapper>
      <Button onClick={prevSlide}>Prev</Button>
      <Button onClick={nextSlide}>Next</Button>
    </SlideContainerBlock>
  );
};

const dummyData: string[] = Array(3).fill(Panibottle);

export default SlideContainer;
