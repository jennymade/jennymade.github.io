import React from "react";
import { Card } from "./card";

export class CardSection extends React.Component {
  render() {
    return (
      <div className="cardWrapper">
        <Card
          role="Product and brand designer"
          roleImg="src/components/card/greenCatDesigner.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses holding a sharpie and facing post-it notes, with a mobile phone mockup above it"
          roleClass="designCat"
          desc="Loves bridging the designer-engineer gap — skilled at ideating on Figma"
        />
        <Card
          role="Developer"
          roleImg="src/components/card/greenCatDeveloper.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses in front of a laptop with code against black window screens above"
          roleClass="developerCat"
          desc="Loves bridging the designer-engineer gap. Works primarily in React and TypeScript, getting the hang of Svelte."
        />
        <Card
          role="Data journalist, analyst and researcher"
          roleImg="src/components/card/greenCatResearch.png"
          roleImgAlt="A green Cheshire-inspired cat wearing glasses in front of a laptop"
          roleClass="researchCat"
          desc="Avid lover of searching for and scraping data from hard-to-get places. Experienced at working with unstructured and large structured data using Python and occasionally R and SQL."
        />
      </div>
    );
  }
}
