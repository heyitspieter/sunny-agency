import milkBottleDesktopImg from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeDesktopImg from "../assets/images/desktop/image-gallery-orange.jpg";
import sugarcubeDesktopImg from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import coneDesktopImg from "../assets/images/desktop/image-gallery-cone.jpg";

import milkBottleMobileImg from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeMobileImg from "../assets/images/mobile/image-gallery-orange.jpg";
import sugarcubeMobileImg from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import coneMobileImg from "../assets/images/mobile/image-gallery-cone.jpg";

import "../styles/layouts/gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <picture>
        <source srcSet={milkBottleDesktopImg} media="(min-width: 23.4em)" />
        <source srcSet={milkBottleMobileImg} media="(max-width: 23.4em)" />
        <img
          src={`${milkBottleDesktopImg} 1x, ${milkBottleMobileImg} 2x`}
          alt="milk bottles"
        />
      </picture>
      <picture>
        <source srcSet={orangeDesktopImg} media="(min-width: 23.4em)" />
        <source srcSet={orangeMobileImg} media="(max-width: 23.4em)" />
        <img
          src={`${orangeDesktopImg} 1x, ${orangeMobileImg} 2x`}
          alt="orange"
        />
      </picture>
      <picture>
        <source srcSet={coneDesktopImg} media="(min-width: 23.4em)" />
        <source srcSet={coneMobileImg} media="(max-width: 23.4em)" />
        <img
          src={`${coneDesktopImg} 1x, ${coneMobileImg} 2x`}
          alt="icecream cone"
        />
      </picture>
      <picture>
        <source srcSet={sugarcubeDesktopImg} media="(min-width: 23.4em)" />
        <source srcSet={sugarcubeMobileImg} media="(max-width: 23.4em)" />
        <img
          src={`${sugarcubeDesktopImg} 1x, ${sugarcubeMobileImg} 2x`}
          alt="sugar cube"
        />
      </picture>
    </div>
  );
};

export default Gallery;
