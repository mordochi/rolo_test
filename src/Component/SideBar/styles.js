import styled from 'styled-components';

export const Container = styled.div`
  width: 76px;
  padding: 8px 11.5px 16px 16px;
  border-right: solid 1px rgba(241, 241, 241, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  > button + button {
    margin-top: 8px;
  }
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
