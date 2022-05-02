import mobile_logo from 'assets/mobile_logo.png';
import mobile_company from 'assets/mobile_company.png';
import {
  CompanyLogo,
  Contents,
  Header,
  MainLogo,
  Section,
  Wrapper,
} from 'components/Sidebar/css/SidebarStyle';

const Sidebar = (props: { openMenu: boolean }) => {
  return (
    <Wrapper openMenu={props.openMenu}>
      <Header>
        <MainLogo src={mobile_logo} alt='mobile_logo' />
      </Header>
      <Section>
        <Contents>
          <CompanyLogo src={mobile_company} alt='mobile_company' />
          파트너정밀가공
        </Contents>
        <Contents>로그아웃</Contents>
      </Section>
    </Wrapper>
  );
};

export default Sidebar;
