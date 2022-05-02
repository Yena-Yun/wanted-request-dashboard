import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.size[0]};
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.button};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 15px;
`;
