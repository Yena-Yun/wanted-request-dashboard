import { ElSwitch, Slider, ToggleInput } from 'styles/ToggleStyle';
import { ToggleProps } from 'types';

const Toggle = (props: ToggleProps) => {
  const browserSize = window.innerWidth;
  return (
    <>
      {(props.click !== 1 || browserSize >= 1127) && (
        <ElSwitch>
          <ToggleInput
            type="checkbox"
            checked={props.checked}
            onChange={() => props.setChecked(!props.checked)}
          />
          <Slider toggled={props.checked} />
        </ElSwitch>
      )}
    </>
  );
};

export default Toggle;
