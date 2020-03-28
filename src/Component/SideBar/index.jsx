import React, { useState } from 'react';
import avatar from '../../assets/avatar.png';
import Button from '../Button';
import Camera from '../icons/Camera';
import Contact from '../icons/Contact';
import Message from '../icons/Message';
import { Avatar, AvatarWrapper, ButtonsContainer, Container } from './styles';

const SideBar = () => {
  const [tab, setTab] = useState('messages');

  const handleTabClick = tab => () => {
    setTab(tab);
  };

  return (
    <Container>
      <ButtonsContainer>
        <Button
          type="square"
          pressed={tab === 'messages'}
          onClick={handleTabClick('messages')}
        >
          <Message
            style={{ marginTop: '2px' }}
            color={tab === 'messages' ? '#1D1D1D' : '#f1f1f1'}
          />
        </Button>
        <Button
          type="square"
          pressed={tab === 'contacts'}
          onClick={handleTabClick('contacts')}
        >
          <Contact color={tab === 'contacts' ? '#1D1D1D' : '#f1f1f1'} />
        </Button>
        <Button
          type="square"
          pressed={tab === 'camera'}
          onClick={handleTabClick('camera')}
        >
          <Camera color={tab === 'camera' ? '#1D1D1D' : '#f1f1f1'} />
        </Button>
      </ButtonsContainer>
      <AvatarWrapper>
        <Avatar src={avatar} />
      </AvatarWrapper>
    </Container>
  );
};

export default SideBar;
