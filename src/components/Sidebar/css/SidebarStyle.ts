import styled from 'styled-components';

export const Wrapper = styled.nav<{ openMenu: boolean }>`
  ${({ theme }) => theme.flex.column};
  background: ${({ theme }) => theme.color.white};
  transform: ${({ openMenu }) =>
    openMenu ? 'translateX(0%)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-out;
  z-index: 20;
`;

export const Header = styled.div`
  width: 280px;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

export const MainLogo = styled.img`
  height: 12px;
`;

export const Section = styled.section`
  margin-top: 36px;
`;

export const Contents = styled.div`
  margin-bottom: 24px;
  padding-left: 32px;
`;

export const CompanyLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;
