import { useState } from 'react';
import styled, { css } from 'styled-components';

const Toggle = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ElSwitch>
      <ToggleInput type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <Slider toggled={checked} />
    </ElSwitch>
  );
};

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 34px;
  height: 14px;
  transition: 0.4s;
  border-radius: 2.2rem;
  background: ${(props: { toggled: boolean }) => (props.toggled ? '#BBDEFB' : '#C2C2C2')};

  &::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: -0.4rem;
    bottom: -0.2rem;
    background: ${(props) => (props.toggled ? '#2196F3' : '#F5F5F5')};
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    ${(props) =>
      props.toggled &&
      css`
        transform: translateX(26px);
      `}
  }
`;

const ElSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.4rem;
  height: 1rem;
  margin-right: 16px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export default Toggle;