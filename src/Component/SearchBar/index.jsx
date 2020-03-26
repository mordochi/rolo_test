import React from 'react';
import Button from '../Button';
import Add from '../icons/Add';
import Input from '../Input';
import { Container } from './styles';

const Panel = () => {
  return (
    <Container>
      <Input width="calc(100% - 48px)" />
      <Button type="circle">
        <Add />
      </Button>
    </Container>
  );
};

export default Panel;
