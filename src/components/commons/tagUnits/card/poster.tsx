import styled from "@emotion/styled";

interface IPoster {
  infoDisplay?: string;
}

function Poster(props: IPoster) {
  const Wrapper = styled.div`
    display: inline-block;
    margin: 30px 10px;
    padding-bottom: ${props.infoDisplay ? "0" : "10px"};
    border-radius: 10px;
    width: 270px;
    :hover {
      cursor: pointer;
      opacity: 0.7;
      background-color: rgb(248, 248, 248);
    }
  `;

  const Img = styled.img`
    margin-bottom: ${props.infoDisplay ? "0" : "15px"};
    border-radius: 10px;
    height: 360px;
    width: 270px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  `;

  const Title = styled.div`
    width: 90%;
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
  `;

  const DayTime = styled.div`
    width: 100%;
  `;

  const Place = styled.div`
    width: 100%;
  `;

  const InfoWrapper = styled.div`
    display: ${props.infoDisplay ? props.infoDisplay : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Img src={"/images/home/banner/p1.gif"} />
      <InfoWrapper>
        <Title>제 19회 정기연주회 국립합창단 정기연주회 "흰 눈사람"</Title>
        <DayTime>2022-02-22(화) PM 07:30</DayTime>
        <Place>예술의전당 콘서트홀</Place>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Poster;
