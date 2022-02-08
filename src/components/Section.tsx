import styled from 'styled-components';
import { dataType } from 'types';
import { Card, AllSelectBox, Toggle } from 'components';
import { useCallback, useEffect, useState } from 'react';

const Section = (props: { data?: dataType[] }) => {
  const { data } = props;
  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<dataType[] | undefined>([]);

  const methodInterSection = useCallback((obj: dataType, arr: string[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (!obj.method.includes(arr[i])) return false;
    }
    return true;
  }, []);

  const materialInterSection = useCallback((obj: dataType, arr: string[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (!obj.material.includes(arr[i])) return false;
    }
    return true;
  }, []);

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
  }, [
    data,
    checked,
    methodSelect,
    materialSelect,
    methodInterSection,
    materialInterSection,
  ]);

  return (
    <Wrapper>
      <Navbar>
        <Title>들어온 요청</Title>
        <Sub>파트너님에게 딱 맞는 요청서를 찾아보세요.</Sub>
        <SelectorWrap>
          <AllSelectBox
            methodSelect={methodSelect}
            setMethodSelect={setMethodSelect}
            materialSelect={materialSelect}
            setMaterialSelect={setMaterialSelect}
          />
          <Toggle checked={checked} setChecked={setChecked} />
        </SelectorWrap>
      </Navbar>
      <Content>
        {filterData?.map((el) => (
          <Card key={el.id} item={el} />
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const Navbar = styled.div`
  width: 1130px;

  @media screen and (max-width: 1142px) {
    width: 750px;
  }

  @media screen and (max-width: 767px) {
    width: 376px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 32px;
  color: #323d45;
`;

const Sub = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
  margin-bottom: 32px;
`;

const SelectorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default Section;
