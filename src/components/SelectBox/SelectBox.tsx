import img from 'assets/arrow_down.png';
import activeImg from 'assets/arrow_down_active.png';
import { SelectBoxProps } from 'types';
import Modal from '../../common/Modal/Modal';
import {
  ArrowDownImg,
  Container,
  Content,
  Wrapper,
} from 'components/SelectBox/css/SelectBoxStyle';

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

export default SelectBox;
