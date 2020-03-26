import React from 'react';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';
import { Container, InnerWrapper } from './styles';

const Panel = () => {
  return (
    <Container>
      <SearchBar />
      <InnerWrapper>
        <SideBar />
      </InnerWrapper>
    </Container>
  );
};

export default Panel;
