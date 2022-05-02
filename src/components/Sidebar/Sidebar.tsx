import * as S from './css/SidebarStyle';
import mobile_logo from 'assets/mobile_logo.png';
import mobile_company from 'assets/mobile_company.png';
import { Image } from 'styles/commonStyles';

const Sidebar = (props: { openMenu: boolean }) => {
  return (
    <S.Wrapper openMenu={props.openMenu}>
      <S.Header>
        <Image src={mobile_logo} alt='mobile_logo' height='12' />
      </S.Header>
      <S.Section>
        <S.Contents>
          <Image
            src={mobile_company}
            alt='mobile_company'
            width='15'
            height='15'
            margin='0 8 0 0'
          />
          파트너정밀가공
        </S.Contents>
        <S.Contents>로그아웃</S.Contents>
      </S.Section>
    </S.Wrapper>
  );
};

export default Sidebar;
