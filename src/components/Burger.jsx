import React from 'react';
import styled from 'styled-components';

const Burger = ({ openMenu, setOpenMenu }) => {
  return (
    <MenuWrap openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <span />
      <span />
      <span />
    </MenuWrap>
  );
};

const MenuWrap = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    height: 24px;
    width: 24px;
    left: 20px;
    display: flex;
    flex-direction: column;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
      height: 2px;
      margin-bottom: 3px;
      background: #dadada;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      display: ${({ openMenu }) => (openMenu ? 'none' : 'block')};
    }
  }
`;

export default Burger;
