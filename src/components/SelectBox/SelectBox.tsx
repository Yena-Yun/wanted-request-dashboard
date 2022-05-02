import { useCallback } from 'react';
import * as S from './css/SelectBoxStyle';
import Modal from '../../common/Modal/Modal';
import { SelectBoxProps } from 'types';
import { MATERIAL, METHOD } from 'utils/constants/filterType';
import img from 'assets/arrow_down.png';
import activeImg from 'assets/arrow_down_active.png';

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const SELECT_LENGTH = props.select.length;
  const { type, click, select, setClick, setSelect } = props;

  const handleWrapper = useCallback(() => {
    if (type === METHOD) {
      (click === 0 || click === 2) && setClick(1);
      click === 1 && setClick(0);
    } else {
      (click === 0 || click === 1) && setClick(2);
      click === 2 && setClick(0);
    }
  }, [click, setClick, type]);

  return (
    <S.Container>
      <S.Wrapper type={type} select={select} onClick={handleWrapper}>
        <S.Content>
          {type === METHOD &&
            `가공방식${SELECT_LENGTH ? '(' : ''}${
              SELECT_LENGTH ? SELECT_LENGTH : ''
            }${SELECT_LENGTH ? ')' : ''}`}
          {type === MATERIAL &&
            `재료${SELECT_LENGTH ? '(' : ''}${
              SELECT_LENGTH ? SELECT_LENGTH : ''
            }${SELECT_LENGTH ? ')' : ''}`}
        </S.Content>
        <S.ArrowDownImg src={SELECT_LENGTH ? activeImg : img} />
      </S.Wrapper>

      {type === METHOD && click === 1 && (
        <Modal
          setClick={setClick}
          type={METHOD}
          setSelect={setSelect}
          select={select}
        />
      )}

      {type === MATERIAL && click === 2 && (
        <Modal
          setClick={setClick}
          type={MATERIAL}
          setSelect={setSelect}
          select={select}
        />
      )}
    </S.Container>
  );
};

export default SelectBox;
