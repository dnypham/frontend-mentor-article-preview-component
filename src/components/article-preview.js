import React, { useState } from "react";

export default function ArticlePreview() {
  return (
    <div className="article-card">
      <img className="article-image" src="./assets/drawers.jpg" alt="drawers" />
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
    </div>
  )
}
