import Sidebar from '../Sidebar/Sidebar';
import { Burger } from 'components';
import { logo, company } from 'assets';
import { BurgerMenuType } from 'types';
import {
  Company,
  CompanyImgWrap,
  CompanyName,
  CompanyWrap,
  Divider,
  GnbWrap,
  Logo,
  LogOut,
  LogoWrap,
  Wrapper,
} from 'components/Header/css/HeaderStyle';

const Header = (props: BurgerMenuType) => {
  return (
    <>
      <Wrapper>
        <div ref={props.divEl}>
          <Burger openMenu={props.openMenu} setOpenMenu={props.setOpenMenu} />
          <Sidebar openMenu={props.openMenu} />
          <LogoWrap>
            <Logo src={logo} alt='logo' />
          </LogoWrap>
        </div>
        <GnbWrap show>
          <CompanyWrap>
            <CompanyImgWrap>
              <Company src={company} alt='processor' />
            </CompanyImgWrap>
            <CompanyName>A 가공 업체</CompanyName>
          </CompanyWrap>
          <Divider />
          <LogOut>로그아웃</LogOut>
        </GnbWrap>
      </Wrapper>
    </>
  );
};

export default Header;
