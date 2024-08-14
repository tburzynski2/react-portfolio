import React from "react";
import "../../public/images/tom-b-avatar.png";

const AboutPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Hi, I'm Tom.</h1>

      <div className="text-center mb-5">
        <img
          src="../../public/images/tom-b-avatar.png"
          alt="Tom Burzynski's headshot"
          className="rounded-circle"
          style={{ width: "150px", height: "150px" }}
        />
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <section className="mb-5">
            <h2 className="h4">What I Do</h2>
            <p>
              I am an SEO professional with three years of experience working
              for a digital marketing agency in Waukesha, WI.
            </p>
            <p>
              I have a proven track record of managing multiple concurrent
              projects, including new website builds and ongoing web marketing
              for existing clients. My expertise spans working with both local
              service businesses and national ecommerce enterprises, and I am
              proud to manage the largest ongoing retainer at my company.
            </p>
            <p>
              As I transition into full-stack web development, I am currently
              enrolled in a coding bootcamp through the University of Wisconsin.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">Personal Interests</h2>
            <p>
              Outside of work and studies, I enjoy exploring Milwaukee with my
              fiancé, Kasey, and our dog, Kora. We love discovering new places
              in the city, going for walks and hikes, and camping in the great
              outdoors. These activities allow me to recharge and bring fresh
              perspectives to my professional endeavors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
