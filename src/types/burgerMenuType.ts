import { RefObject } from 'react';

interface refType {
  divEl: RefObject<HTMLDivElement>;
}
interface BurgerMenuType extends refType {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

export type { refType, BurgerMenuType };
