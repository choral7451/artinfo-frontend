import styled from "@emotion/styled";
import theme from "styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  width: 65%;
`

export const HeaderMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};
`
export const HeaderMainContent = styled.div`
  height: 100px;
  width: 65%;
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: #2b2e32;
  font-size: 40px;
  height: fit-content;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`