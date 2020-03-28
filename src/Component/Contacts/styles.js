import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 85px;
  padding: 8px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

export const ContactWrapper = styled.div`
  text-align: center;
  margin: 0 8px;
  flex: 1 0 auto;

  :first-child {
    margin-left: 0;
  }
`;

export const Name = styled.p`
  margin: 6px 0 0;
  font-family: Circular Std;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
