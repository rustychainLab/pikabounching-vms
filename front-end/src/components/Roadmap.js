import React from "react";
import "../assets/styles.css";
import image1 from "../assets/img/pika-1.svg";
import image2 from "../assets/img/pika-2.svg";
import image3 from "../assets/img/pika-3.svg";

function Roadmap() {
  return (
    <>
      <section className="roadmap" id="roadmap">
        <div className="roadmap-title roadmap-container">
          <h1 className="about-title text-center">Roadmap </h1>
        </div>
        <div className="timeline roadmap-container">
          <div className="entry">
            <div className="title">
              <h3>In Progress</h3>
            </div>
            <div className="body">
              <p>Phase 1</p>
              <p>Testnet stage</p>
            </div>
          </div>
          <div className="entry">
            <div className="title">
              <h3>Coming Soon</h3>
            </div>
            <div className="body">
              <p>Phase 2</p>
              <p>Launch on mainet, open public minting.</p>
            </div>
          </div>
          <div className="entry">
            <div className="title">
              <h3>Coming Soon</h3>
            </div>
            <div className="body">
              <p>Phase 3</p>
              <p>$PBC airdrop distribution.</p>
            </div>
          </div>
          <div className="entry">
            <div className="title">
              <h3>Coming Soon</h3>
            </div>
            <div className="body">
              <p>Phase 4</p>
              <p>We'll let you guess...</p>
            </div>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="roadmap-imgs">
            <div className="roadmap-img">
              <img src={image3} className="sliderimg" alt="" />
            </div>
            <div className="roadmap-img">
              <img src={image2} className="sliderimg" alt="" />
            </div>
            <div className="roadmap-img">
              <img src={image1} className="sliderimg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Roadmap;
