import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ContentsBlock = styled.div`
  height: 320px;
`;

type ContentsProps = {
  content: string;
};

const Contents: React.FC<ContentsProps> = ({ content }) => {
  const cur = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          console.log("here", content);
        }
      },
      { threshold: 0.5 }
    );

    if (cur.current) {
      observer.observe(cur.current);
    }

    return () => {
      console.log("end", content);
      observer.disconnect();
    };
  }, []);

  return <ContentsBlock ref={cur}>{content}</ContentsBlock>;
};

export default Contents;
