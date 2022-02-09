import styled from 'styled-components';

export const SelectBox = styled.div`
  width: 130px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.sub};
  border-radius: 4px;
  padding: 12px 20px;
  z-index: 999;
  position: absolute;
  top: 35px;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  display: none;

  &:checked + div label::after {
    position: absolute;
    top: 0%;
    left: 0%;
    content: '';
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.color.button};
    background: ${({ theme }) => theme.color.button};
    border-radius: ${({ theme }) => theme.radius.modal};
  }
`;
export const CheckBox = styled.div`
  display: flex;
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.color.sub};
  border-radius: 2px;
  margin-right: 10px;
`;
export const CheckIcon = styled.img`
  z-index: 1;
  position: absolute;
  top: 22.22%;
  left: 2px;
  width: 14px;
  height: 10px;
`;

export const Content = styled.span`
  height: 20px;
  left: 0px;
  right: 0px;
  top: calc(50% - 20px / 2);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.default};
`;
