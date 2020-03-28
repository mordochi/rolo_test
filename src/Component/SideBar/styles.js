import styled from 'styled-components';

export const Container = styled.div`
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

export const AvatarWrapper = styled.div`
  position: relative;

  :after {
    content: '';
    width: 44px;
    height: 44px;
    border: 1px solid rgba(241, 241, 241, 0.1);
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
