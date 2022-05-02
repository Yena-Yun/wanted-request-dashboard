import SelectBox from '../SelectBox/SelectBox';
import img from 'assets/refresh.png';
import {
  ButtonWrapper,
  Img,
  RefreshButton,
  Text,
  Wrapper,
} from 'components/AllSelectBox/css/AllSelectBoxStyle';
import { AllSelectBoxProps } from 'types';
import { MATERIAL, METHOD } from 'utils/constants/filterType';

const AllSelectBox = (props: AllSelectBoxProps) => {
  const handleRefresh = () => {
    props.setMethodSelect([]);
    props.setMaterialSelect([]);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <SelectBox
          type={METHOD}
          click={props.click}
          setClick={props.setClick}
          select={props.methodSelect}
          setSelect={props.setMethodSelect}
        />
        <SelectBox
          type={MATERIAL}
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
