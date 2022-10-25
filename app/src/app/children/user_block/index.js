import styled from "styled-components";
import { BoldP, FlexCol, FlexRow, PlainP } from "../shared";

const MainContainer = styled(FlexRow)`
  gap: 0.5rem;
  margin-top: 1rem;
`;

const UserTextContainer = styled(FlexCol)`
  justify-content: center;
`;

const UsernameText = styled(BoldP)`
  padding-bottom: 0.5rem;
`;

export const UserBlock = ({ imageSrc, username, location }) => {
  return (
    <MainContainer>
      <img height="70px" width="70px" src={imageSrc} alt="userProfilePicture" />
      <UserTextContainer>
        <UsernameText>{username}</UsernameText>
        <PlainP>{location}</PlainP>
      </UserTextContainer>
    </MainContainer>
  );
};
