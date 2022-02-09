import { useEffect, useState } from 'react';
import { ElSwitch, Slider, ToggleInput } from 'styles/ToggleStyle';
import { ToggleProps } from 'types';

const Toggle = (props: ToggleProps) => {
  const [browserSize, setBrowserSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleWidth = () => {
      setTimeout(() => setBrowserSize(window.innerWidth), 300);
    };
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);
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
