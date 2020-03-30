import styled from 'styled-components';
import {
  DARK,
  LIGHT_GRAY,
  LIGHT_PURPLE,
  TRANSPARENT_LIGHT_GRAY_1,
  TRANSPARENT_LIGHT_GRAY_2,
  TRANSPARENT_LIGHT_GRAY_5,
  PURPLE
} from '../../constants';

export const Container = styled.div`
  padding: 8px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 20px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
`;

export const Note = styled.p`
  font-size: 13px;
  line-height: 16px;
  opacity: 0.5;
`;

export const Message = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 16px;
  position: relative;

  & + & {
    margin-top: 8px;
  }

  :before {
    content: '';
    display: ${({ isOnline }) => (isOnline ? 'block' : 'none')};
    width: 14px;
    height: 14px;
    background: ${PURPLE};
    border: 2px solid ${DARK};
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 42px;
    z-index: 1;
    box-sizing: border-box;
  }

  :after {
    content: '';
    width: 56px;
    height: 56px;
    border: 1.5px solid ${TRANSPARENT_LIGHT_GRAY_2};
    border-radius: 50%;
    display: block;
    position: absolute;
    box-sizing: border-box;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-right: 20px;

  :after {
    content: '';
    display: ${({ isLastOne }) => (isLastOne ? 'none' : 'block')};
    width: 100%;
    border-bottom: solid 1px ${TRANSPARENT_LIGHT_GRAY_1};
    position: absolute;
    bottom: -4px;
    left: 0;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const Timestamp = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  opacity: ${({ isUnread }) => (isUnread ? '1' : '0.5')};
`;

export const Content = styled.p`
  font-size: 13px;
  font-weight: ${({ isUnread }) => (isUnread ? '500' : 'normal')};
  line-height: 16px;
  color: ${({ isUnread }) =>
    isUnread ? LIGHT_GRAY : TRANSPARENT_LIGHT_GRAY_5};
`;

export const NoneTextContent = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${TRANSPARENT_LIGHT_GRAY_1};
  border-radius: 4px;
  padding: 2px 6px 2px 4px;
  margin-top: 2px;

  > svg {
    margin-right: 4px;
  }
`;

export const VoiceContent = styled(NoneTextContent)`
  background-color: ${LIGHT_PURPLE};
  color: ${PURPLE};
`;
