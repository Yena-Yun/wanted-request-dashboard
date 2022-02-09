interface SelectBoxProps {
  type: string;
  click: number;
  setClick: (click: number) => void;
  select: string[];
  setSelect: (select: string[]) => void;
}

interface StyleType {
  select: string[] | [];
  type: string;
}

type SelectType = string[] | [];

interface AllSelectBoxProps {
  click: number;
  methodSelect: string[];
  setMethodSelect: (method: string[]) => void;
  materialSelect: string[];
  setMaterialSelect: (method: string[]) => void;
  setClick: (click: number) => void;
}

export type { SelectBoxProps, StyleType, SelectType, AllSelectBoxProps };
