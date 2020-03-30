import styled from 'styled-components';
import {
  LIGHT_GRAY,
  TRANSPARENT_LIGHT_GRAY_08,
  TRANSPARENT_LIGHT_GRAY_2
} from '../../constants';

const Container = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ pressed }) =>
    pressed ? LIGHT_GRAY : TRANSPARENT_LIGHT_GRAY_08};

  :hover {
    background-color: ${({ pressed }) =>
      pressed ? LIGHT_GRAY : TRANSPARENT_LIGHT_GRAY_2};
    border: none;
  }

  ${({ isTransparent }) =>
    isTransparent &&
    `background-color: transparent;
     border: 1px solid ${TRANSPARENT_LIGHT_GRAY_2};`}
`;

export const CircleContainer = styled(Container)`
  width: ${({ diameter }) => (diameter ? diameter : '40px')};
  height: ${({ diameter }) => (diameter ? diameter : '40px')};
  border-radius: 50%;
`;

export const SquareContainer = styled(Container)`
  width: 44px;
  height: 44px;
  border-radius: 8px;
`;
