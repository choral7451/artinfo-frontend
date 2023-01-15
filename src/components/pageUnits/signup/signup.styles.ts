import styled from "@emotion/styled";
import theme from "@styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media (max-width: 575.98px) {
    width: 95%;
  }
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
  }
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: black;
  @media (max-width: 575.98px) {
    padding-top: 40px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 80%;
  margin: 10px 0;
`;

export const SendVerificationCode = styled.button`
  height: 100%;
  width: 25%;
  margin-left: 5%;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  :hover {
    color: white;
    background-color: ${theme.colors.primary};
  }
`;

export const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  margin: 0 3% 0 5%;
  width: 11%;
  font-size: 14px;
`;

export const  CheckVerificationCode = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 11%;
  color: white;
  background-color: ${theme.colors.primary};
  :hover {
    color: black;
    background-color: white;
    border: 1px solid ${theme.colors.primary};
  }
`;

export const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 30px;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #427ed1;
`;

export const TermsTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 575.98px) {
    font-size: 12px;
    padding-left: 20px;
  }
`;

export const TermsDetailArrow = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  height: 50px;
  width: 80%;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  :hover {
    color: black;
    background-color: white;
    border: 1px solid ${theme.colors.primary};
  }
`;