import styled from "styled-components";
import { lightColor, veryDarkColor } from "../../UI/variables";

const StyledInput = styled.input`
  outline: none;
  background-color: ${lightColor};
  border: none;
  border-radius: 30px;
  padding: 10px 16px;
  width: 100%;
  box-sizing: border-box;
  color: ${veryDarkColor};
  font-weight: 600;
  margin-top: 10px;
  font-size: 16px;

  &::placeholder {
    color: ${veryDarkColor};
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 20px;
  color: ${veryDarkColor};
`;

interface Props {
  placeholder: string;
  type?: "text" | "email" | "password" | "number" | "phone";
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({
  placeholder,
  type = "text",
  label,
  onChange,
  value,
}: Props) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
