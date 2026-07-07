import React from "react";
import { GalleryGraphic } from "./gallerygraphic";
// import { AI2HTMLEmbed } from "./ai2htmlembed";
// import ebikesclasses from "../../work/ebikes/ebikesclasses.html?raw";
// import vanderveer from "../../work/vanderveer/vanderveer-milestones-forportfolio.html?raw";

export class GallerySection extends React.Component {
  render() {
    return (
      <>
        <div className="galleryWrapper">
          <h2 id="gallerySubsection" className="galleryHeader">
            more graphics & illos
          </h2>

          <div className="galleryGrid">
            <GalleryGraphic
              src="/cricketwars-mobile.jpg"
              alt="A graphic showing full measurements of an average cricket field and cricket pitch"
              storyUrl="https://www.sfchronicle.com/eastbay/article/youth-cricket-san-ramon-22317040.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/rejectedlicenses.png"
              alt="A pile of examples of rejected licenses with plates such as ANXS AF, NOFXXX, RACIST and THTBCH."
              storyUrl="https://www.sfchronicle.com/california/article/rejected-license-plates-dmv-18589821.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/ebikes-mobile.png"
              alt="A diagram distinguishing between the three legal e-bikes classifications, many differences having to do with speed limits, throttle and pedal assist."
              storyUrl="https://www.sfchronicle.com/bayarea/article/e-bike-crash-injury-21331489.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/leogeosatellite-mobile-forportfolio.png"
              alt="A diagram comparing LEO, or low earth orbit, satellites to GEO, or geostrationary orbit, satellites, showing the differences in distance from earth, position and purpose."
              desc="TKTK"
            />
            <GalleryGraphic
              src="/birdmigration-farallonislands-mobile.png"
              alt="An illustration showing the Farallon Islands' habitat type — rocky terrain by the ocean with birds like the brown pelican, common murre and pigeon guillemot residing."
              storyUrl="https://www.sfchronicle.com/bayarea/article/e-bike-crash-injury-21331489.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/birdmigration-rodeolagoon-mobile.png"
              alt="An illustration showing the Rodeo Lagoon's habitat type —  marshland with birds like the band-tailed pigeon, western grebe and Canada goose residing."
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/birdmigration-coyotehills-mobile.png"
              alt="An illustration showing the Coyote Hills' habitat type —  marshland with birds like the red-winged blackbird, American avocetand ruddy duck residing."
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/vanderveer-milestones-mobile.png"
              alt="A diagram showing the milestones of Stanford women's basketball coach Tara Vanderveer's entire career."
              storyUrl="https://www.sfchronicle.com/projects/2024/sf-bird-migration/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/koreancomfortfood-tteokmanduguk.png"
              alt="A yellow-orange illustration of tteok-mandu-guk, a Korean soup made with rice cakes and dumplings."
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/koreancomfortfood-soondaeguk.png"
              alt="A reddish illustration of soondae-guk, a Korean soup made with blood sausage."
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/koreancomfortfood-galbitang.png"
              alt="A orange-ish illustration of galbi-tang, a Korean stew made with beef."
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/koreancomfortfood-kimbap.png"
              alt="A green-ish illustration of kimbap, a Korean roll made with rice and various fillings."
              storyUrl="https://www.sfchronicle.com/projects/2023/bay-area-korean-comfort-food/"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/batteryfire-step1-mobile.png"
              alt="A diagram showing the first step of how battery fires occur from e-bikes and scooters."
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/batteryfire-step2-mobile.png"
              alt="A diagram showing the second step of how battery fires occur from e-bikes and scooters."
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
            <GalleryGraphic
              src="/batteryfire-step3-mobile.png"
              alt="A diagram showing the third step of how battery fires occur from e-bikes and scooters."
              storyUrl="https://www.sfchronicle.com/sf/article/bike-scooter-battery-fire-17869505.php"
              desc="TKTK"
            />
          </div>
        </div>
      </>
    );
  }
}
