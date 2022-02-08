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

const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column}
  padding: 24px 16px;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: ${({ theme }) => theme.radius.base};
  margin: 0 8px 8px 0;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 20px 12px 16px;
  }
`;

const Header = styled.div`
  ${({ theme }) => theme.flex.column}
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.size[2]};
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: ${({ theme }) => theme.size[4]};
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 12px;
    line-height: ${({ theme }) => theme.size[0]};
  }
`;

const Badge = styled.div<{ status: string }>`
  display: ${(props) => (props.status === '상담중' ? 'block' : 'none')};
  height: 24px;
  padding: 2px 8px;
  font-size: ${({ theme }) => theme.size[0]};
  font-weight: ${({ theme }) => theme.weight.medium};
  border: 1px solid ${({ theme }) => theme.color.warning};
  border-radius: ${({ theme }) => theme.radius.button};
  color: ${({ theme }) => theme.color.warning};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8px;
    height: 16px;
    padding: 0 4px;
  }
`;

const Client = styled.p`
  font-size: ${({ theme }) => theme.size[0]};
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: ${({ theme }) => theme.size[3]};
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 24px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    line-height: 4px;
    margin-bottom: 16px;
  }
`;

const Due = styled.span`
  font-size: ${({ theme }) => theme.size[1]};
  line-height: ${({ theme }) => theme.size[3]};
  color: ${({ theme }) => theme.color.sub};
  margin-bottom: 16px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    line-height: ${({ theme }) => theme.size[0]};
  }
`;

const Divider = styled.div`
  width: 334px;
  height: 1px;
  background: ${({ theme }) => theme.color.light};
  margin: 0 auto 32px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 200px;
    margin: 0 auto 16px;
  }
`;

const Section = styled.div`
  ${({ theme }) => theme.flex.column}
`;

const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 10px;
  }
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 4px;
  }
`;

const Label = styled.div`
  width: 70px;
  height: 20px;
  color: ${({ theme }) => theme.color.default};
  font-size: ${({ theme }) => theme.size[1]};
  line-height: ${({ theme }) => theme.size[3]};
  margin-right: 32px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    line-height: 10px;
  }
`;

const Info = styled.div`
  font-size: ${({ theme }) => theme.size[1]};
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: ${({ theme }) => theme.size[3]};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    line-height: 10px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const ShowHistory = styled.div`
  background: ${({ theme }) => theme.color.button};
  font-size: ${({ theme }) => theme.size[1]};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.white};
  padding: 6px 12px;
  margin-right: 8px;
  ${({ theme }) => theme.flex.center};
  border-radius: ${({ theme }) => theme.radius.base};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    padding: 3px 6px;
    margin-right: 4px;
    font-weight: ${({ theme }) => theme.weight.regular};
  }
`;

const Chatting = styled.div`
  font-size: ${({ theme }) => theme.size[1]};
  font-weight: ${({ theme }) => theme.weight.medium};
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.button};
  border: 1px solid ${({ theme }) => theme.color.button};
  ${({ theme }) => theme.flex.center};
  border-radius: ${({ theme }) => theme.radius.base};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    padding: 3px 6px;
    font-weight: ${({ theme }) => theme.weight.regular};
  }
`;

export default Card;
