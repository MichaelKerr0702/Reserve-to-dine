import React from "react";

import logo from "../assets/logo1.png";

import cafe from "../assets/CafeImage.png";

const HomePage = () => {
  return (
    <section className="title">
      <h1 class="name"> About Reserve To Dine </h1>
      <img src={logo} alt="logo" className="logo" />
      {/* <img src={cafe} alt="cafe" className="cafe" /> */}

      <hr></hr>
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <p>
            Reserve To Dine™ has been around for 2 weeks now, and has been one
            of the top selling multimedia platforms for reserving reservations.
            From all you can eat, to opening hours from 5 am to 3 am, Reserve To
            Dine™ has one of the diverse menus ever seen.
            <img src={cafe} alt="cafe" className="cafe" />
            <p>
              "Best pancakes ever eaten, I've reordered 8 times that day!"
              -WolfGang Puck
              <p>
                "The Egg Attack is my morning breakfeast everyday, must eat." -
                Bobby Flay
              </p>
            </p>
            <p>Reserve To Dine™ since last week, proudly owned and served. </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
