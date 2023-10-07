import HeroSection from "../HeroSection";
import React from 'react'
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const index = () => {
  return (
    <>
    <HeroSection/>
    <MySkills/>
    <AboutMe/>
    <MyPortfolio/>
    <Testimonials/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default index