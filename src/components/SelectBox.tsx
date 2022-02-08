import styled from "styled-components";
import img from "assets/arrow_down.png";
import activeImg from "assets/arrow_down_active.png";
import { SelectBoxProps, StyleType } from "types";
import Modal from "./Modal";

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const handleWrapper = () => {
    if (props.type === "method") {
      (props.click === 0 || props.click === 2) && props.setClick(1);
      props.click === 1 && props.setClick(0);
    } else {
      (props.click === 0 || props.click === 1) && props.setClick(2);
      props.click === 2 && props.setClick(0);
    }
  };
  return (
    <Container>
      <Wrapper type={props.type} select={props.select} onClick={handleWrapper}>
        <Content>
          {props.type === "method"
            ? `가공방식${props.select.length ? "(" : ""}${
                props.select.length ? props.select.length : ""
              }${props.select.length ? ")" : ""}`
            : `재료${props.select.length ? "(" : ""}${
                props.select.length ? props.select.length : ""
              }${props.select.length ? ")" : ""}`}
        </Content>
        <ArrowDownImg src={props.select.length ? activeImg : img} />
      </Wrapper>

      {props.type === "method" && props.click === 1 && (
        <Modal
          type={"method"}
          setSelect={props.setSelect}
          select={props.select}
        />
      )}

      {props.type === "material" && props.click === 2 && (
        <Modal
          type={"material"}
          setSelect={props.setSelect}
          select={props.select}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.column}
  position: relative;
  z-index: 0;
  margin-right: 5px;
`;

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
  font-size: ${({ theme }) => theme.size[0]};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const ArrowDownImg = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 1px;
`;

export default SelectBox;
