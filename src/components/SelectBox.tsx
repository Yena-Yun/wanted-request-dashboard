import styled from "styled-components";
import img from "assets/arrow_down.png";
import activeImg from "assets/arrow_down_active.png";
import { SelectBoxProps, StyleType } from "types";
import { useState } from "react";

type SelectType = string[] | [];

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const [select, setSelect] = useState<SelectType>(["asdsad"]);

  return (
    <Wrapper type={props.type} select={select}>
      <Content>
        {props.type === "method"
          ? `가공방식${select.length ? "(" : ""}${
              select.length ? select.length : ""
            }${select.length ? ")" : ""}`
          : `재료${select.length ? "(" : ""}${
              select.length ? select.length : ""
            }${select.length ? ")" : ""}`}
      </Content>
      <ArrowDownImg src={select.length ? activeImg : img} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: ${(props: StyleType) =>
    props.select.length && props.type === "method"
      ? "113px"
      : props.select.length && props.type !== "method"
      ? "91px"
      : !props.select.length && props.type === "method"
      ? "98px"
      : "76px"};
  color: ${(props: StyleType) => (props.select.length ? "white" : "#323d45")};
  background: ${(props) => (props.select.length ? "#1565C0" : "white")};
  height: 32px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid #939fa5;
  cursor: pointer;
  &:hover {
    border-color: #2196f3;
  }
`;

const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const ArrowDownImg = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 1px;
`;

export default SelectBox;
