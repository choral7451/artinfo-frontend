import styled from "@emotion/styled";
import theme from "@styles/theme";
import { TimePicker } from "antd";
import DatePickenpm from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const WriteBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  padding: 30px 0;
  margin: 70px 0;
`;

export const SelectWrapper = styled.div`
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SelectLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  width: 100px;
  height: 40px;
`;

export const BoardTitleInput = styled.input`
  border: none;
  font-size: 20px;
  border-bottom: 2px solid ${theme.colors.primary};
  width: 90%;
  margin: 50px 0;
  padding: 20px 10px;
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

export const InfoWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 0 10px;
`;
export const InfoElementWrapper = styled.div`
  display: flex;
  width: 50%;
`;

export const InfoTitle = styled.div`
  font-size: 20px;
  padding: 10px 30px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export const InfoInput = styled.input`
  border: none;
  font-size: 16px;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.primary};
  margin-left: 20px;
  width: 70%;
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

export const PickWrapper = styled.div`
  display: flex;
`;

export const DatePick = styled(DatePickenpm)`
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin-left: 30px;
`;

export const TimePick = styled(TimePicker)`
  width: 200px;
  border: 1px solid ${theme.colors.primary};
  text-align: center;
  cursor: pointer;
`;

export const BoardControllerWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 40px 10px 0 10px;
  margin-bottom: 50px;
`;

export const ImageInputLabel = styled.label`
  font-size: 20px;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export const ImageInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 5%;
  border-bottom: 2px solid ${theme.colors.primary};
  :hover {
    background-color: ${theme.colors.primary};
    border-radius: 5px;
    color: white;
  }
`;

export const ImageInputText = styled.div`
  position: absolute;
  font-size: 18px;
`;

export const ImageInput = styled.input`
  padding: 0.5em 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

export const ImageDeleteButton = styled.button`
  padding: 10px;
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  margin-left: 20px;
  border: 1px solid ${theme.colors.primary};
  :hover {
    color: black;
    background-color: white;
  }
`;