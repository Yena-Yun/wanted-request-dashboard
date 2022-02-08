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

export type { SelectBoxProps, StyleType, SelectType };
