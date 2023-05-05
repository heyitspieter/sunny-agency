import Heading from "./ui/Heading";

import emilyImg from "../assets/images/image-emily.jpg";
import jennieImg from "../assets/images/image-jennie.jpg";
import thomasImg from "../assets/images/image-thomas.jpg";

import "../styles/layouts/testimonial.scss";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <Heading
        title="Client testimonials"
        size="sm"
        center
        tag="h4"
        classes="heading--gray heading--spaced"
        uppercase
      />
      <div className="testimonial__grid">
        <div className="testimonial__item">
          <figure>
            <img src={emilyImg} alt="emily" />
          </figure>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5 className="services-text">Emily R.</h5>
          <span>Marketing Director</span>
        </div>
        <div className="testimonial__item">
          <figure>
            <img src={thomasImg} alt="thomas" />
          </figure>
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h5 className="services-text">Thomas S.</h5>
          <span>Chief Operating Officer</span>
        </div>
        <div className="testimonial__item">
          <figure>
            <img src={jennieImg} alt="jennie" />
          </figure>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5 className="services-text">Jennie F.</h5>
          <span>Business Owner</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
