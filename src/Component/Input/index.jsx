import React from 'react';
import Search from '../icons/Search';
import { Container, Input as TextInput } from './styles';

const Input = props => {
  return (
    <Container width={props.width}>
      <Search />
      <TextInput
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default Input;
