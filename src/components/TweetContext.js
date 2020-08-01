import React from "react";
import moment from "moment";
import avatar from "../assets/cheetorAvatar.jpg";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = false;
  const isLikedByCurrentUser = false;
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
      }}
    >
      {children}{" "}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
