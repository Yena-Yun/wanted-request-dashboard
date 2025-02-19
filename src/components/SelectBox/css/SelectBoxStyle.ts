import styled from 'styled-components';
import { StyleType } from 'types';
import { METHOD } from 'utils/constants/filterType';

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  z-index: 0;
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  width: ${(props: StyleType) =>
    props.select.length && props.type === METHOD
      ? '113px'
      : props.select.length && props.type !== METHOD
      ? '91px'
      : !props.select.length && props.type === METHOD
      ? '98px'
      : '76px'};
  color: ${(props: StyleType) => (props.select.length ? '#ffffff' : '#323d45')};
  background: ${(props) => (props.select.length ? '#1565C0' : '#ffffff')};
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.base};
  ${({ theme }) => theme.flex.center};
  border: 1px solid ${({ theme }) => theme.color.sub};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.button};
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: ${(props: StyleType) =>
      props.select.length && props.type === METHOD
        ? '93px'
        : props.select.length && props.type !== METHOD
        ? '71px'
        : !props.select.length && props.type === METHOD
        ? '78px'
        : '56px'};
    height: 24px;
  }
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.size[0]};
  font-weight: ${({ theme }) => theme.weight.medium};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
  }
`;

export const ArrowDownImg = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 1px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 18px;
    height: 18px;
  }
`;
