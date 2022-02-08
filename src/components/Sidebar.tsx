import styled from 'styled-components';
import mobile_logo from 'assets/mobile_logo.png';
import mobile_company from 'assets/mobile_company.png';

const Sidebar = (props:{openMenu:boolean}) => {

  return (
    <Wrapper openMenu={props.openMenu} >
      <Header>
        <MainLogo src={mobile_logo} alt='mobile_logo'/>
      </Header>
      <Section>
        <Contents><CompanyLogo src={mobile_company} alt='mobile_company'/>파트너정밀가공</Contents>
        <Contents>로그아웃</Contents>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.nav<{openMenu: boolean}>`
  ${({ theme }) => theme.flex.column};
  background: ${({ theme }) => theme.color.white};
  transform: ${({ openMenu }) => openMenu ? 'translateX(0%)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-out;
  z-index: 20;
`;

const Header = styled.div`
  width: 280px;
  padding: 16px 20px;
  border-bottom: 1px solid #E5E5E5;
`

const MainLogo = styled.img`
  height: 12px;
`

const Section = styled.section`
  margin-top: 36px;
`

const Contents = styled.div`
  margin-bottom: 24px;
  padding-left: 32px;
`

const CompanyLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`


export default Sidebar;
