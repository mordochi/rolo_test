import styled from 'styled-components';
import { FILTER_COLOR } from '../../constants';

export const Container = styled.div`
  max-width: 100%;
  height: 85px;
  padding: 8px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  margin: 0 8px;
  flex: 1 0 auto;
  position: relative;

  :after {
    content: '';
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: ${({ isDark }) => (isDark ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${FILTER_COLOR};
  }

  > p {
    opacity: ${({ isDark }) => (isDark ? '0.5' : '1')};
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

export const Name = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
`;
