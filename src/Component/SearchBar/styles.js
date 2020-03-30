import styled from 'styled-components';
import { TRANSPARENT_BLACK } from '../../constants';

export const Container = styled.div`
  height: 74px;
  padding: 26px 16px 0;
  background-color: ${TRANSPARENT_BLACK};
  backdrop-filter: blur(32.6194px);
  display: flex;
  justify-content: space-between;
`;
