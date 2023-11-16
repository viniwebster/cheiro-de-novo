import styled from "styled-components";
import { white } from "../../UI/variables";

const StyledInput = styled.input`
  outline: none;
  background-color: transparent;
  border: 1px solid ${white};
  border-radius: 30px;
  padding: 10px 16px;
  width: 100%;
  box-sizing: border-box;
  color: ${white};

  &::placeholder {
    color: ${white};
  }
`;

interface Props {
  value: string;
  placeholder: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({ placeholder, setSearch, value }: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(event) => setSearch(event.target.value)}
      value={value}
      type="search"
    />
  );
};

export default InputSearch;
