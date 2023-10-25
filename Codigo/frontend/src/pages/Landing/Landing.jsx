import React from "react";
import Informational from "./Informational";
import Hero from "./Hero";
import Footer from "../../components/Footer";



const Landing = () => {
  return (
    <section className='relative bg-[#FFFFFF]'>
      <Hero/>
      <Informational/>
      <Footer/>
    </section>
  );
};

export default Landing;
