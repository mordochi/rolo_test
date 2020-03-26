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
