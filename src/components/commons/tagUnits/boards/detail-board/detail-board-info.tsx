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
  font-size: 16px;

  @media(max-width: ${commons.device.mobile}) {
    flex-direction: column;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${commons.device.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
  
`;

export const UserIconImage = styled.img`
  height: 30px;
  border-radius: 100%;
  background-color: green;
  margin-right: 20px;

  @media(max-width: ${commons.device.mobile}) {
    height: 26px;
  }
`;

export const UserName = styled.div`
  @media(max-width: ${commons.device.mobile}) {
    font-size: 16px;
  }
`;

export const ViewText = styled.div`
  color: ${commons.colors.primary};
  margin-left: 40px;
  margin-right: 20px;

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

export const CountOfViews = styled.div`
  color: ${commons.colors.primary};

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

export const CommentText = styled.div`
  margin-left: 30px;
  margin-right: 20px;
  color: ${commons.colors.primary};

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
}
`;

export const CountOfComments = styled.div`
  color: ${commons.colors.primary};

  @media(max-width: ${commons.device.tablet}) {
    display: none;
  }
`;

export const CreatedAt = styled.div`
  margin-left: 30px;
  color: ${commons.colors.primary};

  @media(max-width: ${commons.device.mobile}) {
    margin: 5px 0 0 0; 
    font-size: 14px;
  }
`;

function DetailBoardInfo(props:IDetailBoardInfo) {
  return (
    <BoardInfoWrapper>
      <UserWrapper>
        <UserIconImage src={props.userIconImage}/>
        <UserName>{props.userName}</UserName>
      </UserWrapper>
      <ViewText>조회수</ViewText>
      <CountOfViews>{props.countOfViews}</CountOfViews>
      <CommentText>댓글</CommentText>
      <CountOfComments>{props.countOfComments}</CountOfComments>
      <CreatedAt>{props.createdAt}</CreatedAt>
    </BoardInfoWrapper>
  );
}

export default DetailBoardInfo;