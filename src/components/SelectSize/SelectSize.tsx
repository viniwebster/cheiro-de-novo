import { useState } from "react";
import styled from "styled-components";
import { darkColor, veryDarkColor, white } from "../../UI/variables";

interface Props {
  selected: boolean;
}

const StyledSelect = styled.div<Props>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${(props) => (props.selected ? veryDarkColor : darkColor)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-weight: 600;
  cursor: pointer;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

interface PropsSelect {
  value?: sizeOptions;
  sizeOptions: sizeOptions[];
}

interface sizeOptions {
  id: number;
  size: string;
}

const SelectSize = ({ sizeOptions, value } : PropsSelect) => {
  const [select, setSelect] = useState<sizeOptions | null>(value ?? null);

  return (
    <StyledBox>
      {sizeOptions.map((item) => (
        <StyledSelect
          selected={select?.id === item.id}
          key={item.id}
          onClick={() => setSelect(item)}
        >
          {item.size}
        </StyledSelect>
      ))}
    </StyledBox>
  );
};

export default SelectSize;
