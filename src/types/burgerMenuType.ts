import { RefObject } from 'react';
export interface BurgerMenuType extends refType{
  openMenu:boolean,
  setOpenMenu: ((openMenu:boolean) => void)
}
export interface refType {
  divEl: RefObject<HTMLDivElement>
}