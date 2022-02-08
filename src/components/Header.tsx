import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import company from 'assets/company.png';

type colorType = {
  color: Object | undefined;
};

const Header = () => {
  return (
    <Wrapper>
      <MenuWrap show>
        <Bar />
        <Bar />
        <Bar />
      </MenuWrap>
      <LogoWrap>
        <Logo src={logo} alt='logo' />
      </LogoWrap>
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
  );
};

const Wrapper = styled.div`
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  @media screen and (max-width: 768px) {
    height: 70px;
    padding: 16px 60px;
  }
`;

const LogoWrap = styled.div`
  width: 153px;
  height: 20px;
  display: flex;
`;

const MenuWrap = styled('div')<{ show: boolean }>`
  height: 40px;
  margin-right: 19px;
  display: none;
  position: absolute;
  top: 42%;
  left: 20px;

  @media screen and (max-width: 768px) {
    ${(props) => props.show && 'display: block'}
  }
`;

const Bar = styled.div`
  width: 18px;
  height: 2px;
  margin-bottom: 3px;
  background: #dadada;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const GnbWrap = styled('div')<{ show: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
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
  display: block;
  margin-right: 8px;
  margin-top: -11px;
`;

const Company = styled.img`
  height: 100%;
`;

const CompanyName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 20px;
`;
const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: #ffffff;
  margin: 0 32px;
`;

const LogOut = styled.button`
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
`;

export default Header;
