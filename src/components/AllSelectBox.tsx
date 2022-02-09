import SelectBox from './SelectBox';
import img from 'assets/refresh.png';
import {
  ButtonWrapper,
  Img,
  RefreshButton,
  Text,
  Wrapper,
} from 'styles/AllSelectBoxStyle';
import { AllSelectBoxProps } from 'types';

const AllSelectBox = (props: AllSelectBoxProps) => {
  const handleRefresh = () => {
    props.setMethodSelect([]);
    props.setMaterialSelect([]);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <SelectBox
          type="method"
          click={props.click}
          setClick={props.setClick}
          select={props.methodSelect}
          setSelect={props.setMethodSelect}
        />
        <SelectBox
          type="material"
          click={props.click}
          setClick={props.setClick}
          select={props.materialSelect}
          setSelect={props.setMaterialSelect}
        />
      </ButtonWrapper>
      {(props.methodSelect.length !== 0 ||
        props.materialSelect.length !== 0) && (
        <RefreshButton onClick={handleRefresh}>
          <Img src={img} />
          <Text>필터링 리셋</Text>
        </RefreshButton>
      )}
    </Wrapper>
  );
};

export default AllSelectBox;
