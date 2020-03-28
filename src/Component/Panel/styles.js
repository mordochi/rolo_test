import styled from 'styled-components';

export const Container = styled.div`
  min-width: 370px;
  flex: 4 1 0;
  color: #ffffff;
  border-right: solid 1px rgba(241, 241, 241, 0.2);
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  height: calc(100% - 74px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftWrapper = styled.div`
  flex: 0 0 76px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const RightWrapper = styled.div`
  flex: 1 1 0;
  height: 100%;
  overflow: hidden;
  padding-left: 11.5px;
`;

export const MessagesContainer = styled.div`
  max-height: calc(100% - 85px);
  overflow: scroll;
`;
