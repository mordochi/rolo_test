import React from 'react';
import Phone from '../icons/Phone';
import Reply from '../icons/Reply';
import Voice from '../icons/Voice';
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
  const unread = props.messageGroups.reduce(
    (acc, cur) => (cur.message.is_unread ? (acc += 1) : acc),
    0
  );

  const renderMessages = () => {
    return props.messageGroups.map((group, i) => {
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
        <Message key={group.message.content}>
          <Avatar src={group.avatar} />
          <Info isLastOne={i === props.messageGroups.length - 1}>
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
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <Note>{unread} unread messages</Note>
      </Header>
      {renderMessages()}
    </Container>
  );
};

export default Messages;
