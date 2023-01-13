import styled from "@emotion/styled";
import theme from "@styles/theme";

export const Wrapper = styled.div`
  width: 20%;

  @media (max-width: 575.98px) {
    width: 80%;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  @media (max-width: 575.98px) {
    padding-top: 40px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #a1b4cf;
  margin: 15px 0;
`;

export const Input = styled.input`
  width: 93%;
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

export const SocialBtn = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  border-radius: 5px;
  border: none;
  box-shadow: rgb(228 228 228) 0px 1px 1px 1px;
  margin: 20px 0;
`;

export const BtnImg = styled.img`
  margin-left: 20px;
  width: 10%;
  height: 40px;
`;

export const BtnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const FindPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-right: 5px;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const FindPassword = styled.div``;
