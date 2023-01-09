import Body from "./body/Body";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <Body children={props.children}></Body>
      <Footer />
    </>
  );
}
