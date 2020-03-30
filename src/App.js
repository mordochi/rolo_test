import React, { useEffect, useState } from 'react';
import Panel from './Component/Panel';
import ChatRoom from './Component/ChatRoom';
import { Container } from './styles';
import worker_script from './worker';

let myWorker;
const App = () => {
  const [all, setAll] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMesssages = () => {
    setIsLoading(true);
    myWorker.postMessage('fetch messages');
  };

  useEffect(() => {
    myWorker = new Worker(worker_script);
    myWorker.postMessage('fetch messages');

    return () => {
      myWorker.terminate();
    };
  }, []);

  useEffect(() => {
    if (all.length > 0) {
      setIsLoading(false);
    }
  }, [all.length]);

  useEffect(() => {
    myWorker.onmessage = m => {
      const newData = all.concat(m.data.message);
      setAll(newData);
    };
  }, [all]);

  return (
    <Container>
      <Panel
        messageList={all}
        fetchMesssages={fetchMesssages}
        isLoading={isLoading}
      />
      <ChatRoom />
    </Container>
  );
};

export default App;
