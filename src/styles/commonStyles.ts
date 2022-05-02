import styled from 'styled-components';

export const SizedBox = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const FlexBox = styled.div<{ margin?: string }>`
  display: flex;
  ${(props) => props.margin && `margin: ${props.margin}`};
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const Image = styled.img<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.margin && `margin: ${props.margin}`};
`;

export const TextBox = styled.p<{
  size: string;
  weight?: number;
  center?: boolean;
  color?: string;
}>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  ${(props) => props.center && 'margin: 0 auto'};
  ${(props) => props.color && `color: ${props.color}`};
`;
