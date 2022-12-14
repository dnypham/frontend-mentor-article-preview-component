import React, { useState } from "react";

export default function ArticleUserSection() {
  const [isUserSectionVisible, setIsUserSectionVisible] = useState(true);
  const [isShareSectionVisible, setIsShareSectionVisible] = useState(false);
  const [isDesktopShareButtonActive, setIsDesktopShareButtonActive] = useState(false);

  const toggleSection = () => {
    setIsUserSectionVisible(!isUserSectionVisible);
    setIsShareSectionVisible(!isShareSectionVisible);
  }

  const toggleTooltip = () => {
    setIsDesktopShareButtonActive(!isDesktopShareButtonActive);
  }

  return (
    <>
      <div className={isUserSectionVisible ? 'user-section-mobile' : 'hide'}>
        <img className="user-photo" src="./assets/avatar-michelle.jpg" />
        <div className="article-information">
          <p className=" user-name manrope-700 very-dark-grayish-blue">Michelle Appleton</p>
          <p className="article-date manrope-500">28 Jun 2020</p>
        </div>
        <button className="share-button-container" onClick={toggleSection}>
          <img className="share-button" src="./assets/icon-share.svg" />
        </button>
      </div>
      <div className={isShareSectionVisible ? 'share-section' : 'hide'}>
        <h4 className="share-text manrope-500 desaturated-dark-blue">SHARE</h4>
        <img className="share-icon" src="./assets/icon-facebook.svg" />
        <img className="share-icon" src="./assets/icon-twitter.svg" />
        <img className="share-icon" src="./assets/icon-pinterest.svg" />
        <button className="share-button-container-active" onClick={toggleSection}>
          <img className="share-button-active" src="./assets/icon-share.svg" />
        </button>
      </div>
      <div className="user-section-desktop">
        <img className="user-photo" src="./assets/avatar-michelle.jpg" />
        <div className="article-information">
          <p className=" user-name manrope-700 very-dark-grayish-blue">Michelle Appleton</p>
          <p className="article-date manrope-500">28 Jun 2020</p>
        </div>
        <button className={isDesktopShareButtonActive ? 'share-button-container-active' : 'share-button-container'} onClick={toggleTooltip}>
          <div className={`share-tooltip ${isDesktopShareButtonActive ? 'visible' : 'hidden'}`}>
            <h4 className="share-text manrope-500 desaturated-dark-blue">SHARE</h4>
            <img className="share-icon" src="./assets/icon-facebook.svg" />
            <img className="share-icon" src="./assets/icon-twitter.svg" />
            <img className="share-icon" src="./assets/icon-pinterest.svg" />
          </div>
          <img className={isDesktopShareButtonActive ? 'share-button-active' : 'share-button'} src="./assets/icon-share.svg" />
        </button>
      </div>
    </>
  )
}
