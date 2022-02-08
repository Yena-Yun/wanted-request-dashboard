import { useState } from 'react';
import SelectBox from './SelectBox';
import styled from 'styled-components';
import img from 'assets/refresh.png';

interface AllSelectBoxProps {
  methodSelect: string[];
  setMethodSelect: (method: string[]) => void;
  materialSelect: string[];
  setMaterialSelect: (method: string[]) => void;
}
const AllSelectBox = (props: AllSelectBoxProps) => {
  const [click, setClick] = useState<number>(0);

  const handleRefresh = () => {
    props.setMethodSelect([]);
    props.setMaterialSelect([]);
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <SelectBox type='method' click={click} setClick={setClick} select={props.methodSelect} setSelect={props.setMethodSelect} />
        <SelectBox type='material' click={click} setClick={setClick} select={props.materialSelect} setSelect={props.setMaterialSelect} />
      </ButtonWrapper>
      {(props.methodSelect.length !== 0 || props.materialSelect.length !== 0) && (
        <RefreshButton onClick={handleRefresh}>
          <Img src={img} />
          <Text>필터링 리셋</Text>
        </RefreshButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.size[0]};
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.button};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 15px;
`;

export default AllSelectBox;
