import graphicDesignDesktopImg from "../assets/images/desktop/image-graphic-design.jpg";
import photographyDesktopImg from "../assets/images/desktop/image-photography.jpg";
import Heading from "./ui/Heading";

import "../styles/layouts/services.scss";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services__section services__section--bg-1">
        <img
          className="services__img"
          src={graphicDesignDesktopImg}
          alt="apples"
        />
        <div className="services__info">
          <Heading
            title="Graphic Design"
            size="sm"
            tag="h3"
            center
            classes="heading--cyan"
          />
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="services__section services__section--bg-2">
        <img
          className="services__img"
          src={photographyDesktopImg}
          alt="tangerine"
        />
        <div className="services__info">
          <Heading
            title="Photography"
            size="sm"
            tag="h3"
            center
            classes="heading--cyan"
          />
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
