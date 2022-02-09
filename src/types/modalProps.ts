import { StyleType } from 'types';
export interface ModalProps extends StyleType {
  setSelect: (select: string[]) => void;
  setClick: (select: number) => void;
}
