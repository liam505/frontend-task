import styled from "styled-components";

import { LikeButton } from "../../../like_button";
import { FlexRow, PlainP } from "../../../shared";
import { getHashtagText } from "../../helpers";

const CommentRow = styled(FlexRow)`
  gap: 0.5rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 95%;
  align-items: center;
`;

const UserTextContainer = styled(FlexRow)`
  gap: 0.5rem;
`;

export const Comment = ({ username, text }) => {
  return (
    <CommentRow>
      <UserTextContainer>
        <PlainP>
          <b>
            {username}
            {"    "}
          </b>
          {getHashtagText(text)}
        </PlainP>
      </UserTextContainer>

      <LikeButton />
    </CommentRow>
  );
};
