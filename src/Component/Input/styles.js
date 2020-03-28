import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  height: 40px;
  background-color: rgba(241, 241, 241, 0.08);
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
  color: #f1f1f1;
  padding-left: 4px;
`;
