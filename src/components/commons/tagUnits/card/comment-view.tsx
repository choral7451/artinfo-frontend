import styled from "@emotion/styled";
import commons from "@styles/commons";
import CommentWrite from "@tagUnits/card/comment-write";
import {useState} from "react";

interface ICommentView {
  commentUserIconImage?: string;
  commentUserName: string;
  commentCreatedAt: string;
  commentContents: string;
}

const CommentViewWrapper = styled.div`
  border-top: 2px solid ${commons.colors.primary};
  width: 80%;
  margin-top: 160px;
  padding: 20px;
`;

const CommentViewTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentUserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentUserIconImage = styled.img`
  height: 30px;
  border-radius: 100%;
`;

const CommentUserName = styled.div`
  margin: 0 10px;
`;

const CommentCreatedAt = styled.div``;
const CommentViewControllerWrapper = styled.div``;

const CommentContents = styled.div`
  margin-top: 20px;
`;

const ReplyButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
    border: 1px solid ${commons.colors.primary};
  color: black;
  
  :hover {
    background-color: ${commons.colors.primary};
    color: white;
  }
`;

function CommentView(props:ICommentView) {
  const [commentWriteDisplay, setCommentWriteDisplay] = useState(true);

  const onClickSetCommentWriteDisplay = () => {
    setCommentWriteDisplay(prev => !prev);
  };

  return (
    <CommentViewWrapper>
      <CommentViewTopWrapper>
        <CommentUserWrapper>
          <CommentUserIconImage src={props.commentUserIconImage}/>
          <CommentUserName>{props.commentUserName}</CommentUserName>
          <CommentCreatedAt>{props.commentCreatedAt}</CommentCreatedAt>
        </CommentUserWrapper>
        <CommentViewControllerWrapper>
          <ReplyButton onClick={onClickSetCommentWriteDisplay}>{commentWriteDisplay ? '답글 접기' : '답글'}</ReplyButton>
        </CommentViewControllerWrapper>
      </CommentViewTopWrapper>
      <CommentContents>{props.commentContents}</CommentContents>
      <CommentWrite width={"100%"} display={commentWriteDisplay}/>
    </CommentViewWrapper>
  );
}

export default CommentView;