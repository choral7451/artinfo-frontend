import styled from "@emotion/styled";
import commons from "@styles/commons";

interface  IDetailBoardInfo {
  userIconImage?: string;
  userName:string;
  countOfViews: number;
  countOfComments: number;
  createdAt: string;
}

export const BoardInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
  width: 100%;
`;

export const UserIconImage = styled.img`
  height: 40px;
  border-radius: 100%;
  background-color: green;
  margin-right: 10px;
`;

export const UserName = styled.div``;

export const ViewText = styled.div`
  color: ${commons.colors.primary};
  margin: 0 10px;
`;

export const CommentText = styled.div`
  margin: 0 10px;
  color: ${commons.colors.primary}
`;

export const CountOfComments = styled.div`
  color: ${commons.colors.primary}
`;

export const CountOfViews = styled.div`
  color: ${commons.colors.primary}
`;

export const CreatedAt = styled.div`
  margin: 0 10px;
  color: ${commons.colors.primary}
`;

function DetailBoardInfo(props:IDetailBoardInfo) {
  return (
    <BoardInfoWrapper>
      <UserIconImage src={props.userIconImage}/>
      <UserName>{props.userName}</UserName>
      <ViewText>조회수</ViewText>
      <CountOfViews>{props.countOfViews}</CountOfViews>
      <CommentText>댓글</CommentText>
      <CountOfComments>{props.countOfComments}</CountOfComments>
      <CreatedAt>{props.createdAt}</CreatedAt>
    </BoardInfoWrapper>
  );
}

export default DetailBoardInfo;