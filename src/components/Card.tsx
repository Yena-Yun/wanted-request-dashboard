import styled from 'styled-components';
import { dataType } from 'types';

const Card = (props: { item: dataType }) => {
  const { title, client, due, count, amount, method, material, status } = props.item;

  return (
    <Wrapper>
      <Header>
        <TitleWrap>
          <Title>{title}</Title>
          <Badge status={status}>상담중</Badge>
        </TitleWrap>
        <Client>{client}</Client>
        <Due>{due}까지 납기</Due>
      </Header>

      <Divider />

      <Section>
        <Content>
          <Wrap>
            <Label>도면개수</Label>
            <Info>{count}개</Info>
          </Wrap>
          <Wrap>
            <Label>총 수량</Label>
            <Info>{amount}개</Info>
          </Wrap>
          <Wrap>
            <Label>가공방식</Label>
            <Info>{method.join(', ')}</Info>
          </Wrap>
          <Wrap>
            <Label>재료</Label>
            <Info>{material.join(', ')}</Info>
          </Wrap>
        </Content>
        <ButtonWrap>
          <ShowHistory>요청 내역 보기</ShowHistory>
          <Chatting>채팅하기</Chatting>
        </ButtonWrap>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin: 30px 40px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #323d45;
  margin-bottom: 4px;
`;

const Badge = styled.div<{ status: string }>`
  display: ${(props) => (props.status === '상담중' ? 'block' : 'none')};
  height: 24px;
  padding: 2px 8px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  font-weight: 500;
  font-size: 12px;
`;

const Client = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #323d45;
  margin-bottom: 24px;
`;

const Due = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  margin-bottom: 16px;
`;

const Divider = styled.div`
  width: 334px;
  height: 1px;
  background: #e5e5e5;
  margin: 0 auto 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 70px;
  height: 20px;
  color: #323d45;
  font-size: 14px;
  line-height: 20px;
  margin-right: 32px;
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const ShowHistory = styled.div`
  padding: 6px 12px;
  margin-right: 8px;
  background: #2196f3;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Chatting = styled.div`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #2196f3;
  border: 1px solid #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default Card;
