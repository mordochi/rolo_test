import styled from 'styled-components';
import { TRANSPARENT_LIGHT_GRAY_2, LIGHT_GRAY } from '../../constants';

export const Container = styled.div`
  max-width: 470px;
  min-width: 370px;
  flex: 4 1 0;
  border-right: solid 1px ${TRANSPARENT_LIGHT_GRAY_2};
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
  position: relative;
`;

export const MessagesContainer = styled.div`
  max-height: calc(100% - 85px);
  overflow: scroll;
`;

export const Loading = styled.div`
  width: calc(100% - 8px);
  line-height: 36px;
  position: absolute;
  bottom: -36px;
  left: 4px;
  border-radius: 8px;
  color: ${LIGHT_GRAY};
  background-color: ${TRANSPARENT_LIGHT_GRAY_2};
  text-align: center;
  transform: ${props =>
    props.expanded ? 'translateY(-44px)' : 'translateY(44px)'};
  transition: transform 0.4s ease-out;
`;
