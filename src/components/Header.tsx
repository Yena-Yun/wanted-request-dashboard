import Sidebar from './Sidebar';
import Burger from './Burger';
import styled from 'styled-components';
import { logo, company } from 'assets';
import { BurgerMenuType } from 'types/burgerMenuType';

const Header = (props: BurgerMenuType) => {
  return (
    <>
      <Wrapper>
        <div ref={props.node}>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.media.test}) {
    height: 44px;
    padding: 16px 60px;
  }
`;

const LogoWrap = styled.div`
  width: 153px;
  height: 20px;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.media.test}) {
    height: 12px;
    width: 91.8px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const GnbWrap = styled('div')<{ show: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.media.test}) {
    ${(props) => props.show && 'display: none'}
  }
`;

const CompanyWrap = styled.div`
  height: 15px;
  display: flex;
  align-items: center;
`;

const CompanyImgWrap = styled.div`
  height: 100%;
  margin: -11px 8px 0 0;
`;

const Company = styled.img`
  height: 100%;
`;

const CompanyName = styled.p`
  font-size: ${({ theme }) => theme.size[1]};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.size[3]};
`;
const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.color.white};
  margin: 0 32px;
`;

const LogOut = styled.button`
  font-size: ${({ theme }) => theme.size[1]};
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.size[3]};
`;

export default Header;
