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
      let messageContent;
      switch (group.message.type) {
        case 'text':
          messageContent = (
            <Content isUnread={group.message.is_unread}>
              {group.message.sent_by === 'user_id_me' && (
                <Reply style={{ marginRight: '3.61px' }} />
              )}
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
          isOnline={connectedUsers.includes(group.message.sent_by)}
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
