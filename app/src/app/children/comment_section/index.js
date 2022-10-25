import styled from "styled-components";

import { FlexCol, PlainP } from "../shared";
import { Comment } from "./children/Comment";
import { getHashtagText } from "./helpers";

const SectionContainer = styled(FlexCol)`
  overflow-y: scroll;
  height: 40vh;
  width: 95%;
`;

const CaptionText = styled(PlainP)`
  margin-bottom: 0.5rem;
`;

export const CommentSection = ({ caption, comments }) => {
  return (
    <SectionContainer>
      <CaptionText>{getHashtagText(caption)}</CaptionText>
      {comments.map((commentData) => (
        <Comment
          username={commentData.username}
          text={commentData.text}
          userLiked={commentData.likedByViewer}
        />
      ))}
    </SectionContainer>
  );
};
