import styled from "@emotion/styled";

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

export const BoardControllerWrapper = styled.div`
  width: 94%;
`;

export const PosterWrapper = styled.div`
  text-align: center;
  width: 100%;
  @media (max-width: 575.98px) {
    width: 90%;
  }
`;
