import React from "react";

// this logic is a bit complex...
// this is a presentational component that renders
// some data in <h6> tags
const CardSubtitle = ({ season, episode, price }) =>
  episode ? (
    <h6>
      S{season} E{episode}
    </h6>
  ) : null || price ? (
    <h6>Price: {price}</h6>
  ) : null;

export default CardSubtitle;

// ... so let's make the component do just that
// the ternary logic you have above should be at the "implementation level", or,
// where the component is actually in use
// if you follow a more "composable" pattern...
export const CardSubtitle2 = ({ children }) => {
  return <h6>{children}</h6>;
};

// then you have total control over what gets rendered
// where's what this composable pattern would look like in SearchBar.tsx:
/**
 * <CardSubtitle2>S{season} E{episode}</CardSubtitle2>
 * {price && <CardSubtitle2>Price: {price}</CardSubtitle2>}
 *
 */

// if your component is only rendering some data
// make it as simple as possible
