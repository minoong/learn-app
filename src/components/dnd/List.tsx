import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import Item from './Item';

type sProps = {
  isOver: boolean;
};

const Wrapper = styled.div<sProps>`
  border: 1px solid blue;
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => (props.isOver ? 'pink' : 'white')};
`;

const List: React.FC<sProps> = ({ isOver }: sProps) => {
  const [cards, setCards] = useState([
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' },
  ]);

  const moveCard = useCallback(
    // (**) Reorder an array
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];

      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1], // Delete
            [hoverIndex, 0, dragCard], // Add
          ],
        }),
      );
    },
    [cards],
  );

  return (
    <Wrapper isOver={isOver}>
      {cards.map((item, index) => (
        <Item index={index} id={item.id} title={item.title} moveCard={moveCard} key={item.id} />
      ))}
    </Wrapper>
  );
};

export default List;
