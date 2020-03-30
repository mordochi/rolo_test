import styled from 'styled-components';
import { LIGHT_GRAY, TRANSPARENT_LIGHT_GRAY_08 } from '../../constants';

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  height: 40px;
  background-color: ${TRANSPARENT_LIGHT_GRAY_08};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  line-height: 40px;
`;

export const Input = styled.input`
  flex: 1;
  height: 40px;
  line-height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: ${LIGHT_GRAY};
  padding-left: 4px;
`;
