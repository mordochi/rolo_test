import React from 'react';
import { CircleContainer, SquareContainer } from './styles';

const containers = { circle: CircleContainer, square: SquareContainer };
const Button = props => {
  const Container = containers[props.type];
  return (
    <Container
      pressed={props.pressed}
      diameter={props.diameter}
      isTransparent={props.isTransparent}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

export default Button;
