import styled from 'styled-components';
import checkIcon from 'assets/check.png';

const Modal = (props: { type: string }): JSX.Element => {
  const method: string[] = ['밀링', '선반'];
  const material: string[] = ['알루미늄', '탄소강', '구리', '합금강', '강철'];
  return (
    <SelectBox>
      {method.map((el, idx) => (
        <Select key={el}>
          <Input type="checkbox" id={el} value={el} />
          <CheckBox>
            <Label htmlFor={el}>
              <CheckIcon src={checkIcon} alt="check-icon" />
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
  background-color: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 12px 20px;
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
    color: #2196f3;
    background-color: #2196f3;
    border-radius: 2px;
  }
`;
const CheckBox = styled.div`
  display: flex;
  position: relative;
  /* align-items: center; */
`;
const Label = styled.label`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid #939fa5;
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
  color: #323d45;
`;

export default Modal;
