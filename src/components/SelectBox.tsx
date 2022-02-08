import styled from 'styled-components';
import img from 'assets/arrow_down.png';
import activeImg from 'assets/arrow_down_active.png';
import { SelectBoxProps, StyleType } from 'types';
import Modal from './Modal';

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const handleWrapper = () => {
    if (props.type === 'method') {
      (props.click === 0 || props.click === 2) && props.setClick(1);
      props.click === 1 && props.setClick(0);
    } else {
      (props.click === 0 || props.click === 1) && props.setClick(2);
      props.click === 2 && props.setClick(0);
    }
  };
  return (
    <Container>
      <Wrapper type={props.type} select={props.select} onClick={handleWrapper}>
        <Content>
          {props.type === 'method'
            ? `가공방식${props.select.length ? '(' : ''}${
                props.select.length ? props.select.length : ''
              }${props.select.length ? ')' : ''}`
            : `재료${props.select.length ? '(' : ''}${
                props.select.length ? props.select.length : ''
              }${props.select.length ? ')' : ''}`}
        </Content>
        <ArrowDownImg src={props.select.length ? activeImg : img} />
      </Wrapper>

      {props.type === 'method' && props.click === 1 && (
        <Modal
          setClick={props.setClick}
          type={'method'}
          setSelect={props.setSelect}
          select={props.select}
        />
      )}

      {props.type === 'material' && props.click === 2 && (
        <Modal
          setClick={props.setClick}
          type={'material'}
          setSelect={props.setSelect}
          select={props.select}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  z-index: 0;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  width: ${(props: StyleType) =>
    props.select.length && props.type === 'method'
      ? '113px'
      : props.select.length && props.type !== 'method'
      ? '91px'
      : !props.select.length && props.type === 'method'
      ? '98px'
      : '76px'};
  color: ${(props: StyleType) => (props.select.length ? 'white' : '#323d45')};
  background: ${(props) => (props.select.length ? '#1565C0' : 'white')};
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
      props.select.length && props.type === 'method'
        ? '93px'
        : props.select.length && props.type !== 'method'
        ? '71px'
        : !props.select.length && props.type === 'method'
        ? '78px'
        : '56px'};
    height: 24px;
  }
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.size[0]};
  font-weight: ${({ theme }) => theme.weight.medium};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
  }
`;

const ArrowDownImg = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 1px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 18px;
    height: 18px;
  }
`;

export default SelectBox;
