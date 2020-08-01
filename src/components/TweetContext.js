import React, { useState } from "react";
import moment from "moment";
import avatar from "../assets/cheetorAvatar.jpg";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const tweetContents = "Giga-bummer! We're locked out!";
  const displayName = "Cheetor";
  const username = "the_real_cheetor";
  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
      }}
    >
      {children}{" "}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
