import { useEffect, useState } from 'react';
import * as S from './css/ToggleStyle';
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
        <S.ElSwitch>
          <S.ToggleInput
            type='checkbox'
            checked={props.checked}
            onChange={() => props.setChecked(!props.checked)}
          />
          <S.Slider toggled={props.checked} />
        </S.ElSwitch>
      )}
    </>
  );
};

export default Toggle;
