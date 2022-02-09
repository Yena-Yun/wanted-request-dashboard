import checkIcon from 'assets/check.png';
import {
  CheckBox,
  CheckIcon,
  Content,
  Input,
  Label,
  Select,
  SelectBox,
} from 'styles/ModalStyle';
import { ModalProps } from 'types';

const Modal = ({
  type,
  setSelect,
  select,
  setClick,
}: ModalProps): JSX.Element => {
  const method: string[] = ['밀링', '선반'];
  const material: string[] = ['알루미늄', '탄소강', '구리', '합금강', '강철'];
  let list: string[] = method;
  if (type === 'material') {
    list = material;
  }

  const handleLabel = (el: string) => {
    select.includes(el as never)
      ? setSelect(select.filter((e) => e !== el))
      : setSelect([...select, el]);
  };

  return (
    <SelectBox>
      {list.map((el) => (
        <Select key={el}>
          <Input
            type="checkbox"
            id={el}
            value={el}
            checked={select.includes(el as never)}
            readOnly
          />

          <CheckBox>
            <Label htmlFor={el} onClick={() => handleLabel(el)}>
              <CheckIcon src={checkIcon} alt="check-icon" />
            </Label>
            <Content>{el}</Content>
          </CheckBox>
        </Select>
      ))}
    </SelectBox>
  );
};

export default Modal;
