import React from 'react';
import Panel from './Component/Panel';
import ChatRoom from './Component/ChatRoom';
import { Container } from './styles';

const App = () => {
  return (
    <Container>
      <Panel />
      <ChatRoom />
    </Container>
  );
};

export default App;
