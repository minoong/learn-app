import React, { useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { ItemTypes } from '../../static/dnd';
import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';

type sProps = {
  isDragging: boolean;
};

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
};

const Wrapper = styled.div<sProps>`
  border: 1px solid blue;
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
  background-color: green;
`;

interface ItemProps {
  id: number;
  title: string;
  index: number;
  moveCard: Function;
}

const Item: React.FC<ItemProps> = ({ id, title, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      console.log(hoverBoundingRect);

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging, opacity }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  drag(drop(ref));

  return (
    <Wrapper ref={ref} isDragging={isDragging} style={{ ...style, opacity }}>
      <p>{title}</p>
    </Wrapper>
  );
};

export default Item;
