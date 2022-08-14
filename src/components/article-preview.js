import React, { useState } from "react";
import ArticleImage from "./article-image";
import ArticleText from "./article-text";

export default function ArticlePreview() {
  return (
    <div className="article-card">
      <ArticleImage />
      <ArticleText />
      <div className="user-section">
        <img className="user-photo" src="./assets/avatar-michelle.jpg" />
        <div className="article-information">
          <p className=" user-name manrope-700 very-dark-grayish-blue">Michelle Appleton</p>
          <p className="article-date manrope-500 desaturated-dark-blue">28 Jun 2020</p>
        </div>
        <button className="share-button-container">
          <img className="share-button" src="./assets/icon-share.svg" />
        </button>
      </div>
    </div>
  )
}
