import { useCallback, useEffect, useState } from 'react';
import * as S from './css/SectionStyle';
import Card from '../Card/Card';
import AllSelectBox from '../AllSelectBox/AllSelectBox';
import Toggle from 'common/Toggle/Toggle';
import { dataType } from 'types';
import { MATERIAL, METHOD } from 'utils/constants/filterType';

const Section = (props: { data?: dataType[]; openMenu: boolean }) => {
  const { data } = props;
  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<dataType[] | undefined>([]);
  const [click, setClick] = useState<number>(0);

  const InterSection = useCallback(
    (type: string, obj: dataType, arr: string[]) => {
      for (let i = 0; i < arr.length; i++) {
        if (type === METHOD) {
          if (!obj.method.includes(arr[i])) return false;
        } else if (type === MATERIAL) {
          if (!obj.material.includes(arr[i])) return false;
        }
      }
      return true;
    },
    []
  );

  useEffect(() => {
    if (checked) {
      const toggleData = data
        ?.filter((el) => el.status === '상담중')
        .filter((el) => InterSection(METHOD, el, methodSelect))
        .filter((el) => InterSection(MATERIAL, el, materialSelect));
      setFilterData(toggleData);
    } else {
      const toggleData = data
        ?.filter((el) => InterSection(METHOD, el, methodSelect))
        .filter((el) => InterSection(MATERIAL, el, materialSelect));
      setFilterData(toggleData);
    }
  }, [data, checked, methodSelect, materialSelect, InterSection]);

  return (
    <S.Wrapper>
      {props.openMenu && <S.Shadow openMenu={props.openMenu} />}
      <S.Navbar>
        <S.Title>들어온 요청</S.Title>
        <S.Sub>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Sub>
        <S.SelectorWrap>
          <AllSelectBox
            methodSelect={methodSelect}
            setMethodSelect={setMethodSelect}
            materialSelect={materialSelect}
            setMaterialSelect={setMaterialSelect}
            click={click}
            setClick={setClick}
          />
          <S.ToggleWrap>
            <Toggle
              checked={checked}
              setChecked={setChecked}
              click={click}
              setClick={setClick}
            />
            <S.ToggleText>상담 중인 요청만 보기</S.ToggleText>
          </S.ToggleWrap>
        </S.SelectorWrap>
      </S.Navbar>
      <S.Content>
        {filterData?.length ? (
          filterData.map((el) => <Card key={el.id} item={el} />)
        ) : (
          <S.NoContent>조건에 맞는 견적 요청이 없습니다.</S.NoContent>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default Section;
