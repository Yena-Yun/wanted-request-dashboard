import * as S from './css/SidebarStyle';
import mobile_logo from 'assets/mobile_logo.png';
import mobile_company from 'assets/mobile_company.png';

const Sidebar = (props: { openMenu: boolean }) => {
  return (
    <S.Wrapper openMenu={props.openMenu}>
      <S.Header>
        <S.MainLogo src={mobile_logo} alt='mobile_logo' />
      </S.Header>
      <S.Section>
        <S.Contents>
          <S.CompanyLogo src={mobile_company} alt='mobile_company' />
          파트너정밀가공
        </S.Contents>
        <S.Contents>로그아웃</S.Contents>
      </S.Section>
    </S.Wrapper>
  );
};

export default Sidebar;
