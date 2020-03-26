import React from 'react';
import { CircleContainer, SquareContainer } from './styles';

const containers = { circle: CircleContainer, square: SquareContainer };
const Button = props => {
  const Container = containers[props.type];
  return <Container pressed={props.pressed}>{props.children}</Container>;
};

export default Button;
