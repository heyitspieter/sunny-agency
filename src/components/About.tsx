import Button from "./ui/Button";

import standOutDesktopImg from "../assets/images/desktop/image-stand-out.jpg";
import transformDesktopImg from "../assets/images/desktop/image-transform.jpg";
import standOutMobileImg from "../assets/images/mobile/image-stand-out.jpg";
import transformMobileImg from "../assets/images/mobile/image-transform.jpg";

import "../styles/layouts/about.scss";
import Heading from "./ui/Heading";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__section">
        <div className="about__info">
          <div className="about__info-wrapper">
            <Heading
              title="Transform your brand"
              size="md"
              color="black"
              tag="h2"
            />
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Button
              label="Learn more"
              onClick={() => {}}
              className="btn--wght-900 btn--border-accent-1"
              outline
            />
          </div>
        </div>
        <picture className="about__img">
          <source srcSet={transformDesktopImg} media="(min-width: 23.4em)" />
          <source srcSet={transformMobileImg} media="(max-width: 23.4em)" />
          <img
            className="about__img"
            src={`${transformDesktopImg} 1x, ${transformMobileImg} 2x`}
            alt="egg"
          />
        </picture>
      </div>
      <div className="about__section about__section--order-reverse">
        <div className="about__info">
          <div className="about__info-wrapper">
            <Heading
              title="Stand out to the right audience"
              size="md"
              color="black"
              tag="h2"
            />
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <Button
              label="Learn more"
              onClick={() => {}}
              className="btn--wght-900 btn--border-accent-2"
              outline
            />
          </div>
        </div>
        <picture className="about__img">
          <source srcSet={standOutDesktopImg} media="(min-width: 23.4em)" />
          <source srcSet={standOutMobileImg} media="(max-width: 23.4em)" />
          <img
            className="about__img"
            src={`${standOutDesktopImg} 1x, ${standOutMobileImg} 2x`}
            alt="egg"
          />
        </picture>
      </div>
    </div>
  );
};

export default About;
