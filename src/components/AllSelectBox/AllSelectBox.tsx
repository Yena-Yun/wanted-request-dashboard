import * as S from './css/AllSelectBoxStyle';
import SelectBox from '../SelectBox/SelectBox';
import { AllSelectBoxProps } from 'types';
import { MATERIAL, METHOD } from 'utils/constants/filterType';
import img from 'assets/refresh.png';

const AllSelectBox = (props: AllSelectBoxProps) => {
  const handleRefresh = () => {
    props.setMethodSelect([]);
    props.setMaterialSelect([]);
  };

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
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
      </S.ButtonWrapper>
      {(props.methodSelect.length !== 0 ||
        props.materialSelect.length !== 0) && (
        <S.RefreshButton onClick={handleRefresh}>
          <S.Img src={img} />
          <S.Text>필터링 리셋</S.Text>
        </S.RefreshButton>
      )}
    </S.Wrapper>
  );
};

export default AllSelectBox;
