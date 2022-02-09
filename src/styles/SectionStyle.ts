import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: center;
  padding: 40px 0;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px 0;
  }
`;

export const Shadow = styled.div<{ openMenu: boolean }>`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  opacity: 0.9;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Navbar = styled.div`
  width: 1130px;

  @media screen and (max-width: 1142px) {
    width: 750px;
  }

  @media screen and (max-width: 767px) {
    width: 376px;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 360px;
    padding: 0 20px 8px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size[3]};
  line-height: 32px;
  color: ${({ theme }) => theme.color.default};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.size[0]}
    line-height: ${({ theme }) => theme.size[0]}
  }
`;

export const Sub = styled.p`
  font-size: ${({ theme }) => theme.size[2]}
  line-height: ${({ theme }) => theme.size[4]}
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 6px;
    line-height: 8px;
    margin-bottom: 20px;
  }
`;

export const SelectorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    display: initial;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 20px;
  }
`;

export const ToggleWrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 8px;
  }
`;

export const ToggleText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.default} @media screen and
    (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    margin-left: -2px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.center}
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    width: 1130px;
  }
`;

export const NoContent = styled.div`
  width: 1130px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.noContent};
  color: ${({ theme }) => theme.color.sub} ${({ theme }) => theme.flex.center}
    @media screen and (max-width: 1142px) {
    width: 750px;
  }

  @media screen and (max-width: 767px) {
    width: 376px;
  }
`;
