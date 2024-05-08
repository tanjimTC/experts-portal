import React from 'react'
import Hero from "../../../Hero"
import style from "./style.module.css"

const HeroSection = () => {
    return (
      <div>
        <Hero
          className={style["about-us-hero"]}
          image="/images/homepage/hero-bg.webp"
          text="About Us"
        />
      </div>
    );
}

export default HeroSection
