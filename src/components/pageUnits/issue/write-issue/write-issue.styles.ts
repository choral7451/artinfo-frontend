import styled from "@emotion/styled";
import theme from "@styles/theme";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56%;
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
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 35px;
  margin-right: 20px;
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

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false,});
export const TextArea = styled(ReactQuill)`
  margin-bottom: 50px;
  height: 500px;
  width: 90%;
`;