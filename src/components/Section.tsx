import styled from 'styled-components';
import { dataType } from 'types';
import { Card, AllSelectBox, Toggle } from 'components';

const Section = (props: { data?: dataType[] }) => {
  const { data } = props;

  return (
    <Wrapper>
      <Navbar>
        <Title>들어온 요청</Title>
        <Sub>파트너님에게 딱 맞는 요청서를 찾아보세요.</Sub>
        <SelectorWrap>
          <AllSelectBox />
          <Toggle />
        </SelectorWrap>
      </Navbar>
      <Content>{data && data.map((el) => <Card key={el.id} item={el} />)}</Content>
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
`;

const SelectorWrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default Section;
