import { useState } from "react";
import SelectBox from "./SelectBox";
import styled from "styled-components";
import img from "assets/refresh.png";

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  margin-bottom: 2px;
  font-size: 12px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  color: #2196f3;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 15px;
`;

const AllSelectBox = () => {
  const [click, setClick] = useState<number>(0);

  const [methodSelect, setMethodSelect] = useState<string[]>([]);
  const [materialSelect, setMaterialSelect] = useState<string[]>([]);

  const handleRefresh = () => {
    setMethodSelect([]);
    setMaterialSelect([]);
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <SelectBox
          type="method"
          click={click}
          setClick={setClick}
          select={methodSelect}
          setSelect={setMethodSelect}
        />
        <SelectBox
          type="material"
          click={click}
          setClick={setClick}
          select={materialSelect}
          setSelect={setMaterialSelect}
        />
      </ButtonWrapper>
      {(methodSelect.length !== 0 || materialSelect.length !== 0) && (
        <RefreshButton onClick={handleRefresh}>
          <Img src={img} />
          <Text>필터링 리셋</Text>
        </RefreshButton>
      )}
    </Wrapper>
  );
};

export default AllSelectBox;
