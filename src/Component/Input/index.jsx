import React from 'react';
import Search from '../icons/Search';
import { Container } from './styles';

const Input = props => {
  return (
    <Container width={props.width}>
      <Search />
    </Container>
  );
};

export default Input;
