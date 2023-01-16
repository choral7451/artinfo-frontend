import styled from "@emotion/styled";
import common from "@styles/commons";

interface IInput {
  width: string;
  placeholder: string;
  margin?: string;
}

function Input(props: IInput) {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props.width};
    border: 1px solid ${common.colors.primary};
    border-radius: 5px;
  `;

  const StyledInput = styled.input`
    width: 90%;
    height: 100%;
    font-size: 16px;
    border: none;
    :focus {
      outline: none;
    }
    :focus::placeholder {
      color: transparent;
    }
    ::placeholder {
      color: #a1b4cf;
      transition: all 0.3s ease-in-out;
    }
  `;

  return (
    <Wrapper>
      <StyledInput placeholder={props.placeholder} />
    </Wrapper>
  );
}

export default Input;
