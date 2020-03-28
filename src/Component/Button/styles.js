import styled from 'styled-components';

const Container = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ pressed }) =>
    pressed ? 'rgba(241, 241, 241, 1)' : 'rgba(241, 241, 241, 0.08)'};

  :hover {
    background-color: ${({ pressed }) =>
      pressed ? 'rgba(241, 241, 241, 1)' : 'rgba(241, 241, 241, 0.2)'};
    border: none;
  }

  ${({ isTransparent }) =>
    isTransparent &&
    `background-color: transparent;
     border: 1px solid rgba(241, 241, 241, 0.2);`}
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
