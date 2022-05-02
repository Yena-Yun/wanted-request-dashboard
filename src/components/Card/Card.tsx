import * as S from './css/CardStyle';
import { dataType } from 'types';

const Card = (props: { item: dataType }) => {
  const { title, client, due, count, amount, method, material, status } =
    props.item;

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          <S.Badge status={status}>상담중</S.Badge>
        </S.TitleWrap>
        <S.Client>{client}</S.Client>
        <S.Due>{due}까지 납기</S.Due>
      </S.Header>

      <S.Divider />

      <S.Section>
        <S.Content>
          <S.Wrap>
            <S.Label>도면개수</S.Label>
            <S.Info>{count ? count : 0}개</S.Info>
          </S.Wrap>
          <S.Wrap>
            <S.Label>총 수량</S.Label>
            <S.Info>{amount}개</S.Info>
          </S.Wrap>
          <S.Wrap>
            <S.Label>가공방식</S.Label>
            <S.Info>{method.join(', ')}</S.Info>
          </S.Wrap>
          <S.Wrap>
            <S.Label>재료</S.Label>
            <S.Info>{material.join(', ')}</S.Info>
          </S.Wrap>
        </S.Content>
        <S.ButtonWrap>
          <S.ShowHistory>요청 내역 보기</S.ShowHistory>
          <S.Chatting>채팅하기</S.Chatting>
        </S.ButtonWrap>
      </S.Section>
    </S.Wrapper>
  );
};

export default Card;
