import checkIcon from 'assets/check.png';
import * as S from './css/ModalStyle';
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
    <S.SelectBox>
      {list.map((el) => (
        <S.Select key={el}>
          <S.Input
            type='checkbox'
            id={el}
            value={el}
            checked={select.includes(el as never)}
            readOnly
          />

          <S.CheckBox>
            <S.Label htmlFor={el} onClick={() => handleLabel(el)}>
              <S.CheckIcon src={checkIcon} alt='check-icon' />
            </S.Label>
            <S.Content>{el}</S.Content>
          </S.CheckBox>
        </S.Select>
      ))}
    </S.SelectBox>
  );
};

export default Modal;
