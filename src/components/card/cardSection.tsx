import React from "react";
import { Card } from "./card";

export class CardSection extends React.Component {
  render() {
    return (
      <div className="cardWrapper">
        <Card
          role="Product and brand designer"
          roleImg="/card/greenCatDesignerThickLine.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses holding a sharpie and facing post-it notes, with a mobile phone mockup above it"
          roleClass="designCat"
          roleDesc="designDesc"
          desc="One side of bridging the designer-engineer gap — skilled at taking ideas from ideation to implementation, from Sharpie on post-it notes to Figma."
        />
        <Card
          role="Developer"
          roleImg="/card/greenCatDevThickLine.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses in front of a laptop with code against black window screens above"
          roleClass="developerCat"
          roleDesc="developerDesc"
          desc="Another side of bridging the designer-engineer gap. Working primarily in React and TypeScript to make designs come to life while getting the hang of Svelte."
        />
        <Card
          role="Data journalist, analyst and researcher"
          roleImg="/card/greenCatResearchThickLine.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses in front several window screens and email-related icon. There are chart and code-related screenshots above the cat."
          roleClass="researchCat"
          roleDesc="researchDesc"
          desc="Avid lover of searching for and scraping data from hard-to-get places. Experienced at working with large unstructured and structured data using Python and occasionally R and SQL."
        />
      </div>
    );
  }
}
