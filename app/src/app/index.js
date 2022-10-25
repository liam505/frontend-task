import React from "react";
import { CommentSection, Image, SideInfoFooter, UserBlock } from "./children";
import { initialisePostData } from "./helpers";
import {
  ImageContainer,
  MainContainer,
  SidePanel,
  SidePanelDivider,
} from "./styles";

const App = ({ data }) => {
  const {
    location,
    commentsWithUsernames,
    postCaption,
    totalPostLikes,
    postAge,
    display_url,
    username,
    profile_pic_url,
  } = initialisePostData(data);

  return (
    <MainContainer>
      <ImageContainer>
        <Image imageSrc={display_url} caption={postCaption} />
      </ImageContainer>
      <SidePanel>
        <UserBlock
          imageSrc={profile_pic_url}
          username={username}
          location={location.name}
        />
        <SidePanelDivider />
        <CommentSection
          caption={postCaption}
          comments={commentsWithUsernames}
        />
        <SideInfoFooter totalLikes={totalPostLikes} postAge={postAge} />
      </SidePanel>
    </MainContainer>
  );
};

export default App;
