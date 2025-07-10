import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="/media/homeHero.png" alt="hero image" className="p-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="p-2 btn btn-primary" style={{width:"20%", margin:"auto"}}>Sign up for free</button>
      </div>
    </div>
  );
};

export default Hero;
