export interface BurgerMenuType {
  openMenu:boolean,
  setOpenMenu: ((openMenu:boolean) => void)
  node: React.RefObject<HTMLDivElement>
}