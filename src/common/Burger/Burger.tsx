import * as S from './css/BurgerStyle';

const Burger = (props: {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <S.MenuWrap
      openMenu={props.openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <span />
      <span />
      <span />
    </S.MenuWrap>
  );
};

export default Burger;
