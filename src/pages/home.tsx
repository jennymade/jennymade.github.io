import React from "react";
import SpadeIcon from "../components/customIcons/spadeclick";
import { CardSection } from "../components/card/cardSection";
import { AboutSection } from "../components/sections/aboutSection";
import { WorkSection } from "../components/sections/workSection";
import { NavSection } from "../components/sections/navSection";
import { GallerySection } from "../components/sections/gallerySection";

export default function Home() {
  return (
    <div className="tktk">
      <div className="homeContainer">
        <h1 className="introHeader">
          hi, i'm jenn<span className="introYBounce">y</span>
        </h1>
        <p className="introDek">
          <span className="introDekPartOne">jack of many trades, </span>
          <span className="introDekPartTwo">
            master of communication and adaptability
          </span>
        </p>
        <CardSection />
        <NavSection />
        <AboutSection />
        <WorkSection />
        <GallerySection />
        <div className="contactSection">
          <h2 className="contactHeader">
            want to chat or collaborate creatively?
          </h2>
          <p>kwonjseo [at] gmail [dot] com</p>
          <br />
          <p className="backToNavLink">
            <a href="#navSection">
              back to site navigation <SpadeIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
