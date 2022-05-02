import * as S from './css/HeaderStyle';
import Burger from 'common/Burger/Burger';
import Sidebar from '../Sidebar/Sidebar';
import { BurgerMenuType } from 'types';
import { logo, company } from 'assets';

const Header = (props: BurgerMenuType) => {
  return (
    <S.Wrapper>
      <div ref={props.divEl}>
        <Burger openMenu={props.openMenu} setOpenMenu={props.setOpenMenu} />
        <Sidebar openMenu={props.openMenu} />
        <S.LogoWrap onClick={() => (window.location.href = '/')}>
          <S.Logo src={logo} alt='logo' />
        </S.LogoWrap>
      </div>
      <S.GnbWrap show>
        <S.CompanyWrap>
          <S.CompanyImgWrap>
            <S.Company src={company} alt='processor' />
          </S.CompanyImgWrap>
          <S.CompanyName>A 가공 업체</S.CompanyName>
        </S.CompanyWrap>
        <S.Divider />
        <S.LogOut>로그아웃</S.LogOut>
      </S.GnbWrap>
    </S.Wrapper>
  );
};

export default Header;
