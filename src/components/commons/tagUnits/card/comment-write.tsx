import RequestSmallButtonMain from "@tagUnits/buttons/request-small-button-main";
import styled from "@emotion/styled";
import commons from "@styles/commons";

interface ICommentWrite {
  width?:string;
  display: boolean
}

function CommentWrite(props: ICommentWrite) {
  const width = props.width ?? '80%';
  const display = props.display ? 'inline-block' : 'none';

  const WriteCommentWrapper = styled.div`
    display: ${display};
    border-top: 1px solid ${commons.colors.primary};
    border-bottom: 2px solid ${commons.colors.primary};
    margin-top: 20px;
    padding: 20px 0;
    width: ${width};
`;

  const WriteCommentTextAreaWrapper = styled.div`
    border: 1px solid ${commons.colors.primary};
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
  const WriteCommentTextArea = styled.textarea`
    width: 95%;
    height: 90%;
    padding: 20px 0;
    resize: none;
    border: none;
    border-bottom: 1px solid ${commons.colors.primary};
    :focus {
      outline: none;
    }
`;

  const WriteCommentControllerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0;
`;

  const CountOfTexts = styled.div`
    margin-right: 20px;
`;
  return (
    <WriteCommentWrapper>
      <WriteCommentTextAreaWrapper>
        <WriteCommentTextArea placeholder={'댓글으 입력해주세요.'}/>
        <WriteCommentControllerWrapper>
          <CountOfTexts>0/600</CountOfTexts>
          <RequestSmallButtonMain text={'등록'} marginRight={'20px'}/>
        </WriteCommentControllerWrapper>
      </WriteCommentTextAreaWrapper>
    </WriteCommentWrapper>
  );
}

export default CommentWrite;