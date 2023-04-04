import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle("Papa React is back", "Top readers - 9000")}
      {newsArticle("Papa React is back", "Top readers - 9000")}
      {newsArticle("Papa React is back", "Top readers - 9000")}
      {newsArticle("Papa React is back", "Top readers - 9000")}
      {newsArticle("Papa React is back", "Top readers - 9000")}
      {newsArticle("Papa React is back", "Top readers - 9000")}
    </div>
  );
}

export default Widgets;

