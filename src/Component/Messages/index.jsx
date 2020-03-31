import React, { useEffect, useRef } from 'react';
import Phone from '../icons/Phone';
import Reply from '../icons/Reply';
import Voice from '../icons/Voice';
import { connectedUsers } from '../Panel/constants';
import {
  Avatar,
  Container,
  Content,
  Header,
  Info,
  Message,
  Name,
  NoneTextContent,
  Note,
  Title,
  Timestamp,
  VoiceContent,
  Wrapper
} from './styles';

const Messages = props => {
  const ref = useRef(null);
  const { messageGroups, setCurrentHeight, title } = props;

  useEffect(() => {
    if (setCurrentHeight) {
      setCurrentHeight(ref.current.offsetHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageGroups.length]);

  const unread = messageGroups.reduce(
    (acc, cur) => (cur.message.is_unread ? (acc += 1) : acc),
    0
  );

  const renderMessages = () => {
    return messageGroups.map((group, i) => {
      const idNum = +group.message.sent_by.split('user_id_')[1];
      let messageContent;
      switch (group.message.type) {
        case 'text':
          messageContent = (
            <Content isUnread={group.message.is_unread}>
              {idNum % 3 === 0 && <Reply style={{ marginRight: '3.61px' }} />}
              {group.message.content}
            </Content>
          );
          break;
        case 'phone_call':
          messageContent = (
            <NoneTextContent>
              <Phone />
              {group.message.status}
            </NoneTextContent>
          );
          break;
        case 'voice':
          messageContent = (
            <VoiceContent>
              <Voice />
              Voice Message
            </VoiceContent>
          );
          break;
        default:
          break;
      }

      return (
        <Message
          key={i}
          isOnline={idNum === 1 || idNum === 2 || idNum % 5 === 0}
        >
          <Avatar src={group.avatar} alt="avatar" />
          <Info isLastOne={i === messageGroups.length - 1}>
            <Wrapper>
              <Name>{group.name}</Name>
              <Timestamp isUnread={group.message.is_unread}>
                {group.timestamp}
              </Timestamp>
            </Wrapper>
            {messageContent}
          </Info>
        </Message>
      );
    });
  };

  return (
    <Container ref={ref}>
      <Header>
        <Title>{title}</Title>
        <Note>{unread} unread messages</Note>
      </Header>
      {renderMessages()}
    </Container>
  );
};

export default Messages;
