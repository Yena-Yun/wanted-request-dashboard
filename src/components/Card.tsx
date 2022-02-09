import {
  Badge,
  ButtonWrap,
  Chatting,
  Client,
  Content,
  Divider,
  Due,
  Header,
  Info,
  Label,
  Section,
  ShowHistory,
  Title,
  TitleWrap,
  Wrap,
  Wrapper,
} from 'styles/CardStyle';
import { dataType } from 'types';

const Card = (props: { item: dataType }) => {
  const { title, client, due, count, amount, method, material, status } =
    props.item;

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
            <Info>{count ? count : 0}개</Info>
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

export default Card;
