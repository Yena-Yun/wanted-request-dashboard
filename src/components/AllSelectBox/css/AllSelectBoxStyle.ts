import styled from 'styled-components';

export const Text = styled.div`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.size[0]};
`;

export const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.button};
  cursor: pointer;
`;
