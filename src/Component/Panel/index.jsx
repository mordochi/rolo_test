import React, { useEffect, useState, useRef } from 'react';
import debounce from '../../debounce';
import Contacts from '../Contacts';
import Messages from '../Messages';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';
import { starredMessageGroups } from './constants';
import {
  Container,
  InnerWrapper,
  LeftWrapper,
  Loading,
  MessagesContainer,
  RightWrapper
} from './styles';

const Panel = props => {
  const ref = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [starredHeight, setStarredHeight] = useState(0);
  const [messagesHeight, setMessagesHeight] = useState(0);

  const handleFetchMessages = () => {
    if (
      !props.isLoading &&
      ref.current.scrollTop >=
        0.9 * (starredHeight + messagesHeight - containerHeight)
    ) {
      props.fetchMesssages(true);
    }
  };

  const debouncedFetchMessages = debounce(handleFetchMessages, 15);

  useEffect(() => {
    if (props.messageList.length > 1) {
      setContainerHeight(ref.current.offsetHeight);
    }
  }, [props.messageList.length]);

  useEffect(() => {
    const container = ref.current;
    container.addEventListener('scroll', debouncedFetchMessages);

    return () => {
      container.removeEventListener('scroll', debouncedFetchMessages);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerHeight, starredHeight, messagesHeight]);

  return (
    <Container>
      <SearchBar />
      <InnerWrapper>
        <LeftWrapper>
          <SideBar />
        </LeftWrapper>
        <RightWrapper>
          <Contacts />
          <MessagesContainer ref={ref}>
            <Messages
              title="Starred"
              messageGroups={starredMessageGroups}
              setCurrentHeight={setStarredHeight}
            />
            <Messages
              title="Message"
              messageGroups={props.messageList}
              setCurrentHeight={setMessagesHeight}
            />
            <Loading expanded={props.isLoading}>Loading...</Loading>
          </MessagesContainer>
        </RightWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default Panel;
