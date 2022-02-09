import { dataType } from 'types';
import { Card, AllSelectBox, Toggle } from 'components';
import { useEffect, useState } from 'react';
import { materialInterSection, methodInterSection } from 'utils';
import {
  Content,
  Navbar,
  NoContent,
  SelectorWrap,
  Shadow,
  Sub,
  Title,
  ToggleText,
  ToggleWrap,
  Wrapper,
} from 'styles/SectionStyle';

const Section = (props: { data?: dataType[]; openMenu: boolean }) => {
  const { data } = props;
  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<dataType[] | undefined>([]);
  const [click, setClick] = useState<number>(0);

  useEffect(() => {
    if (checked) {
      const toggleData = data
        ?.filter((el) => el.status === '상담중')
        .filter((el) => methodInterSection(el, methodSelect))
        .filter((el) => materialInterSection(el, materialSelect));
      setFilterData(toggleData);
    } else {
      const toggleData = data
        ?.filter((el) => methodInterSection(el, methodSelect))
        .filter((el) => materialInterSection(el, materialSelect));
      setFilterData(toggleData);
    }
  }, [data, checked, methodSelect, materialSelect]);

  return (
    <Wrapper>
      {props.openMenu && <Shadow openMenu={props.openMenu} />}
      <Navbar>
        <Title>들어온 요청</Title>
        <Sub>파트너님에게 딱 맞는 요청서를 찾아보세요.</Sub>
        <SelectorWrap>
          <AllSelectBox
            methodSelect={methodSelect}
            setMethodSelect={setMethodSelect}
            materialSelect={materialSelect}
            setMaterialSelect={setMaterialSelect}
            click={click}
            setClick={setClick}
          />
          <ToggleWrap>
            <Toggle
              checked={checked}
              setChecked={setChecked}
              click={click}
              setClick={setClick}
            />
            <ToggleText>상담 중인 요청만 보기</ToggleText>
          </ToggleWrap>
        </SelectorWrap>
      </Navbar>
      <Content>
        {filterData?.length ? (
          filterData.map((el) => <Card key={el.id} item={el} />)
        ) : (
          <NoContent>조건에 맞는 견적 요청이 없습니다.</NoContent>
        )}
      </Content>
    </Wrapper>
  );
};

export default Section;
