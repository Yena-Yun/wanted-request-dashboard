import { MenuWrap } from 'common/Burger/css/BurgerStyle';

const Burger = (props: {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <MenuWrap openMenu={props.openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <span />
      <span />
      <span />
    </MenuWrap>
  );
};

export default Burger;
