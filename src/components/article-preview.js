import React, { useState } from "react";
import ArticleImage from "./article-image";
import ArticleText from "./article-text";
import ArticleUserSection from "./article-user-section";

export default function ArticlePreview() {
  return (
    <div className="article-card">
      <ArticleImage />
      <div>
        <ArticleText />
        <ArticleUserSection />
      </div>
    </div>
  )
}
