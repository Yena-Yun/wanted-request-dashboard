import styled from 'styled-components';
import checkIcon from 'assets/check.png';

interface ModalProps {
  type: string;
  setSelect: (select: string[]) => void;
  select: string[] | [];
}

const Modal = ({ type, setSelect, select }: ModalProps): JSX.Element => {
  const method: string[] = ['밀링', '선반'];
  const material: string[] = ['알루미늄', '탄소강', '구리', '합금강', '강철'];
  let list: string[] = method;
  if (type === 'material') {
    list = material;
  }

  const handleLabel = (el: string) => {
    select.includes(el as never) ? setSelect(select.filter((e) => e !== el)) : setSelect([...select, el]);
  };

  return (
    <SelectBox>
      {list.map((el) => (
        <Select key={el}>
          <Input type='checkbox' id={el} value={el} checked={select.includes(el as never)} readOnly />

          <CheckBox>
            <Label htmlFor={el} onClick={() => handleLabel(el)}>
              <CheckIcon src={checkIcon} alt='check-icon' />
            </Label>
            <Content>{el}</Content>
          </CheckBox>
        </Select>
      ))}
    </SelectBox>
  );
};

const SelectBox = styled.div`
  width: 130px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.sub};
  border-radius: 4px;
  padding: 12px 20px;
  z-index: 999;
  position: absolute;
  top: 35px;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  display: none;

  &:checked + div label::after {
    position: absolute;
    top: 0%;
    left: 0%;
    content: '';
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.color.button};
    background: ${({ theme }) => theme.color.button};
    border-radius: 2px;
  }
`;
const CheckBox = styled.div`
  display: flex;
  position: relative;
`;

const Label = styled.label`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.color.sub};
  border-radius: 2px;
  margin-right: 10px;
`;
const CheckIcon = styled.img`
  z-index: 1;
  position: absolute;
  top: 22.22%;
  left: 2px;
  width: 14px;
  height: 10px;
`;

const Content = styled.span`
  height: 20px;
  left: 0px;
  right: 0px;
  top: calc(50% - 20px / 2);
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.default};
`;

export default Modal;
