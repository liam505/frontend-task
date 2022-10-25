import styled from "styled-components";

import { LikeButton } from "../like_button";
import { BoldP, FlexCol, FlexRow, PlainP } from "../shared";

const FooterContainer = styled(FlexRow)`
  width: 85%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const FooterTextContainer = styled(FlexCol)`
  gap: 0.5rem;
`;

const PostAgeText = styled(PlainP)`
  color: gray;
`;

export const SideInfoFooter = ({ totalLikes, postAge }) => {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <BoldP>{totalLikes} likes</BoldP>
        <PostAgeText> {postAge}</PostAgeText>
      </FooterTextContainer>
      <LikeButton big={true} />
    </FooterContainer>
  );
};
