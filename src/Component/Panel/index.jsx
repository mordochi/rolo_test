import React from 'react';
import Contacts from '../Contacts';
import Messages from '../Messages';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';
import { generalMessageGroups, starredMessageGroups } from './constants';
import {
  Container,
  InnerWrapper,
  LeftWrapper,
  MessagesContainer,
  RightWrapper
} from './styles';

const Panel = () => {
  return (
    <Container>
      <SearchBar />
      <InnerWrapper>
        <LeftWrapper>
          <SideBar />
        </LeftWrapper>
        <RightWrapper>
          <Contacts />
          <MessagesContainer>
            <Messages title="Starred" messageGroups={starredMessageGroups} />
            <Messages title="Message" messageGroups={generalMessageGroups} />
          </MessagesContainer>
        </RightWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default Panel;
