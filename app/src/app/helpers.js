import {
  differenceInCalendarDays,
  format,
  formatDistanceToNowStrict,
} from "date-fns";

export const mapUsernameToComments = (comments, edgeCommentsData) => {
  const updatedCommentsData = comments.map((comment) => {
    const matchedData = edgeCommentsData.find(
      (edge) => edge.node.id === comment.id
    );
    return { ...comment, username: matchedData.node.owner.username };
  });
  return updatedCommentsData;
};

export const getCaptionFromEdges = (data) => data.edges[0].node.text;

export const getTotalLikesFromEdges = (data) => data.count;

export const getPostAgeText = (timestampInSeconds) => {
  const timestampInMilliseconds = timestampInSeconds * 1000;
  const postAge = formatDistanceToNowStrict(timestampInSeconds);
  const postAgeInDays = differenceInCalendarDays(
    Date.now(),
    timestampInMilliseconds
  );

  if (
    postAge.includes("second") ||
    postAge.includes("minute") ||
    postAge.includes("hour")
  ) {
    return `${postAge} ago`;
  }
  if (postAge.includes("day") && postAgeInDays < 7) {
    return `${postAgeInDays} days ago`;
  }
  if (postAge.includes("month") || postAge.includes("day")) {
    const formattedDate = format(timestampInMilliseconds, "d LLLL");
    return formattedDate;
  }
  if (postAge.includes("year")) {
    const formattedDate = format(timestampInMilliseconds, "d LLLL y");
    return formattedDate;
  }
};

export const initialisePostData = (rawPostData) => {
  const commentsWithUsernames = mapUsernameToComments(
    rawPostData.comments,
    rawPostData.edge_media_to_comment.edges
  );
  const postCaption = getCaptionFromEdges(rawPostData.edge_media_to_caption);
  const totalPostLikes = getTotalLikesFromEdges(
    rawPostData.edge_media_preview_like
  );
  const postAge = getPostAgeText(rawPostData.taken_at_timestamp);

  return {
    location: rawPostData.location,
    username: rawPostData.owner.username,
    profile_pic_url: rawPostData.owner.profile_pic_url,
    commentsWithUsernames,
    postCaption,
    totalPostLikes,
    postAge,
    display_url: rawPostData.display_url,
  };
};
