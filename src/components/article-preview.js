import React, { useState } from "react";
import ArticleImage from "./article-image";

export default function ArticlePreview() {
  return (
    <div className="article-card">
      <ArticleImage />
      <div className="article-text-container">
        <h2 className="article-title manrope-700 very-dark-grayish-blue">
          Shift the overall look and feel by adding these wonderful touches
          to furniture in your home
        </h2>
        <p className="article-paragraph manrope-500 desaturated-dark-blue">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
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
