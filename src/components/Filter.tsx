import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Filter = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <Title>들어온 요청</Title>
      <Content>파트너님에게 딱 맞는 요청서를 찾아보세요.</Content>
      <NavWrap>
        <FilterWrap>
          {/* <ProcessMethod></ProcessMethod> */}
          {/* <Material></Material> */}
        </FilterWrap>
        <ToggleWrap>
          <ToggleBtn>
            <ToggleInput type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
            <Slider toggled={checked} />
          </ToggleBtn>
          <ToggleText>상담 중인 요청만 보기</ToggleText>
        </ToggleWrap>
      </NavWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Content = styled.p``;

const NavWrap = styled.div``;

const FilterWrap = styled.div``;

const ToggleWrap = styled.div``;

const Slider = styled('span')<{ toggled: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 2.2rem;
  background: #2196f3;
  &::before {
    position: absolute;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    left: -0.4rem;
    bottom: -0.2rem;
    background: #1565c0;
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    ${(props) =>
      props.toggled &&
      css`
        transform: translateX(26px);
      `}
  }
`;

const ToggleBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 2.4rem;
  height: 1rem;
  margin: 0 auto;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleText = styled.span``;

export default Filter;
