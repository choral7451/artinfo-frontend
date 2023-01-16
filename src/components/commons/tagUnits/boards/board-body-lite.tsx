import styled from "@emotion/styled";
import common from "@styles/commons";
import { v4 as uuidv4 } from "uuid";

interface IBoardBodyLite {
  posts: {
    title: string;
    date: string;
  } []
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${common.colors.primary};
  height: 80px;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 60%;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
`;

function BoardBodyLite(props:IBoardBodyLite) {
  const posts = props.posts.map(post => {
    return (
      <Row key={uuidv4()}>
        <Title>{post.title}</Title>
        <Date>{post.date}</Date>
      </Row>);
  });

  return (
    <Wrapper>
      {posts}
    </Wrapper>
  );
}

export default BoardBodyLite;