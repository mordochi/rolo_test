import React from 'react';
import avatar from '../../assets/avatar.png';
import Button from '../Button';
import Camera from '../icons/Camera';
import Contact from '../icons/Contact';
import Message from '../icons/Message';
import { Avatar, ButtonsContainer, Container } from './styles';

const SideBar = () => {
  return (
    <Container>
      <ButtonsContainer>
        <Button type="square" pressed={true}>
          <Message style={{ marginTop: '2px' }} />
        </Button>
        <Button type="square">
          <Contact />
        </Button>
        <Button type="square">
          <Camera />
        </Button>
      </ButtonsContainer>
      <Avatar src={avatar} />
    </Container>
  );
};

export default SideBar;
