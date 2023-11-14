import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { darkColor, veryDarkColor } from "../../UI/variables";
import { useState } from "react";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  min-width: 240px;
  padding: 0 20px;
  background-color: ${darkColor};
  color: white;
  border: none;
  position: relative;
  text-transform: capitalize;
  margin-bottom: 32px;
`;

interface props {
  $active: boolean
}

const StyledOptions = styled.div<props>`
  display: ${props => props.$active ? "flex" : "none"};
  position: absolute;
  left: 0;
  flex-direction: column;
  top: 100%;
  width: 100%;
`;

const StyledOption = styled.div`
    align-items: center;
    background-color: ${darkColor};
    border-top: 2px solid ${veryDarkColor};
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    text-transform: capitalize;
    &:hover {
      background-color: #94b097;
      transition: .3s;
      cursor: pointer;
      color: white;
    }
`

interface PropsFilter {
  options: string[]
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ options, filter, setFilter} : PropsFilter) => {
  const [open, setOpen] = useState(false);
  
  return (
    <StyledButton onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
      <span>{filter || "Filtrar Por:"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <StyledOptions $active={open}>
        <StyledOption onClick={() => setFilter("")}></StyledOption>
        {options?.map((option) => (
          <StyledOption onClick={() => setFilter(option)} key={option}>{option}</StyledOption>
        ))}
      </StyledOptions>
    </StyledButton>
  );
};

export default Filter;
