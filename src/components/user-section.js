import React, { useState } from "react";

export default function UserSection() {


  return (
    <>
    <div className="user-section">
      <img className="user-photo" src="./assets/avatar-michelle.jpg" />
      <div className="article-information">
        <p className=" user-name manrope-700 very-dark-grayish-blue">Michelle Appleton</p>
        <p className="article-date manrope-500">28 Jun 2020</p>
      </div>
      <button className="share-button-container">
        <img className="share-button" src="./assets/icon-share.svg" />
      </button>
    </div>
    <div className="share-section">
      <h4 className="share-text manrope-500 desaturated-dark-blue">SHARE</h4>
       <img className="share-icon" src="./assets/icon-facebook.svg" />
      <img className="share-icon" src="./assets/icon-twitter.svg" />
      <img className="share-icon" src="./assets/icon-pinterest.svg" />
      <button className="share-button-container-active">
        <img className="share-button-active" src="./assets/icon-share.svg" />
      </button>
    </div>
    </>
  )
}
