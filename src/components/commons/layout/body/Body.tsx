import styled from "@emotion/styled";

export default function Body(props: any) {
  const BodyComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <BodyComponent>{props.children}</BodyComponent>;
}
