import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 25px 60px;
    height: 12px;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 44px;
    padding: 16px 60px;
  }
`;

export const LogoWrap = styled.div`
  width: 153px;
  height: 20px;
  display: flex;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 12px;
    width: 91.8px;
  }
`;

export const GnbWrap = styled('div')<{ show: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    ${(props) => props.show && 'display: none'}
  }
`;

export const CompanyWrap = styled.div`
  display: flex;
  align-items: center;
  height: 15px;
`;

export const CompanyImgWrap = styled.div`
  height: 100%;
  margin: -11px 8px 0 0;
`;

export const CompanyName = styled.p`
  font-size: ${({ theme }) => theme.size[1]};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.size[3]};
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.color.white};
  margin: 0 32px;
`;

export const LogOut = styled.button`
  font-size: ${({ theme }) => theme.size[1]};
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.size[3]};
  cursor: pointer;
`;
