interface SelectBoxProps {
  type: string;
}

interface StyleType extends SelectBoxProps {
  select: string[] | [];
}

export type { SelectBoxProps, StyleType };
