import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const BannerSource = styled.img`
  width: 100%;
  height: auto;
`;

const Wrapper = styled(Slider)`
  margin: 60px 0;
  width: 100%;
`;

interface IBannver {
  images: string[];
}

function Banner(props: IBannver) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const images = props.images.map((el) => {
    return (
      <div key={uuidv4()}>
        <BannerSource src={el} />
      </div>
    );
  });

  return <Wrapper {...settings}>{images}</Wrapper>;
}

export default Banner;
