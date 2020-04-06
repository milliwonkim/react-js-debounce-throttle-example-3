import React from "react";

const WikiCard = ({ wiki }) => (
  <article className="wikiCard">
    <h4>{wiki.title}</h4>
    <img
      width="100px"
      src={
        wiki && wiki.thumbnail
          ? wiki.thumbnail.source
          : "http://onthewayhome2.com/wp-content/themes/pashmina/images/blank.png"
      }
      alt="something"
    />
    <p>{wiki.extract}</p>
  </article>
);

export default WikiCard;
