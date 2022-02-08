import styled from 'styled-components';
import { dataType } from 'types';
import { Card, AllSelectBox, Toggle } from 'components';
import { useEffect, useState } from 'react';
import { materialInterSection, methodInterSection } from 'utils';

const Section = (props: { data?: dataType[]; openMenu: boolean }) => {
  const { data } = props;
  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<dataType[] | undefined>([]);

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
          />
          <ToggleWrap>
            <Toggle checked={checked} setChecked={setChecked} />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const Shadow = styled.div<{ openMenu: boolean }>`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  opacity: 0.9;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
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

  @media screen and (max-width: 768px) {
    display: initial;
  }
`;

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;

const ToggleText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NoContent = styled.div`
  width: 1130px;
  height: 100px;
  border: 1px solid #c2c2c2;
  color: #939fa5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1142px) {
    width: 750px;
  }

  @media screen and (max-width: 767px) {
    width: 376px;
  }
`;
export default Section;
