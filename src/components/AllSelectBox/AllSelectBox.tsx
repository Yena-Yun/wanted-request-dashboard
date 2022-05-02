import { useCallback } from 'react';
import * as S from './css/AllSelectBoxStyle';
import { FlexBox, Image } from 'styles/commonStyles';
import SelectBox from '../SelectBox/SelectBox';
import { AllSelectBoxProps } from 'types';
import { MATERIAL, METHOD } from 'utils/constants/filterType';
import img from 'assets/refresh.png';

const AllSelectBox = (props: AllSelectBoxProps) => {
  const {
    click,
    setClick,
    methodSelect,
    setMethodSelect,
    materialSelect,
    setMaterialSelect,
  } = props;

  const handleRefresh = useCallback(() => {
    setMethodSelect([]);
    setMaterialSelect([]);
  }, [setMethodSelect, setMaterialSelect]);

  return (
    <FlexBox>
      <FlexBox margin='0 15 0 0'>
        <SelectBox
          type={METHOD}
          click={click}
          setClick={setClick}
          select={methodSelect}
          setSelect={setMethodSelect}
        />
        <SelectBox
          type={MATERIAL}
          click={click}
          setClick={setClick}
          select={materialSelect}
          setSelect={setMaterialSelect}
        />
      </FlexBox>
      {(methodSelect.length !== 0 || materialSelect.length !== 0) && (
        <S.RefreshButton onClick={handleRefresh}>
          <Image
            src={img}
            alt='filter reset'
            width='24'
            height='24'
            margin='0 5 0 0'
          />
          <S.Text>필터링 리셋</S.Text>
        </S.RefreshButton>
      )}
    </FlexBox>
  );
};

export default AllSelectBox;
