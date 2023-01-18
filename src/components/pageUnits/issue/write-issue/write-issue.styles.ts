import styled from "@emotion/styled";
import commons from "@styles/commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media(max-width: ${commons.device.tablet}) {
    width: 85%;
  }
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
  border: 1px solid ${commons.colors.primary};
  padding: 30px 0;
  margin: 70px 0;
`;

export const SelectWrapper = styled.div`
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media(max-width: ${commons.device.mobile}) {
    justify-content: center;
  }
`;

export const SelectLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${commons.colors.primary};
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
  border-bottom: 2px solid ${commons.colors.primary};
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

export const BoardControllerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${commons.device.mobile}) {
    flex-direction: column;
  }
`;