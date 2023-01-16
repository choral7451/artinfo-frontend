import styled from "@emotion/styled";
import commons from "@styles/commons";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

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

  @media (max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

export const HeaderMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${commons.colors.primary};
  border-bottom: 1px solid ${commons.colors.primary};

  @media (max-width: ${commons.device.tablet}) {
    border: none;
    height: 200px;
  }

  @media (max-width: ${commons.device.mobile}) {
    border: none;
    height: 140px;
  }
`;
export const HeaderMainContent = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: center;
  
  @media (max-width: ${commons.device.tablet}) {
    width: 100%;
    justify-content: center;
  }
`;

export const Menu = styled(MenuOutlined)`
  width: 25%;
  display: none;

  @media (max-width: ${commons.device.tablet}) {
    display: initial;
    font-size: 38px;
  }
  
  @media (max-width: ${commons.device.mobile}) {
    font-size: 26px;
  }
`;

export const LoginUserIcon = styled(UserOutlined)`
  width: 25%;
  display: none;

  @media (max-width: ${commons.device.tablet}) {
    display: initial;
    font-size: 38px;
  }

  @media (max-width: ${commons.device.mobile}) {
    display: initial;
    font-size: 26px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  color: #2b2e32;
  font-size: 40px;
  height: fit-content;

  @media (max-width: ${commons.device.tablet}) {
    font-size: 60px;
    width: 50%;
  }

  @media (max-width: ${commons.device.mobile}) {
    font-size: 40px;
    width: 50%;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 991.98px) {
    display: none;
  }
`;