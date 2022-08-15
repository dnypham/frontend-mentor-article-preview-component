import React, { useState } from "react";
import ArticleImage from "./article-image";
import ArticleText from "./article-text";
import UserSection from "./user-section";

export default function ArticlePreview() {
  return (
    <div className="article-card">
      <ArticleImage />
      <div className="article-desktop-layout">
        <ArticleText />
        <UserSection />
      </div>
    </div>
  )
}
