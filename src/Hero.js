import Navbar from "./Navbar";

const Hero = ({HeroTitle,HeroSubtitle,CTA,handleHeading}) => {
  return (
    <div className="heroBack">
      <Navbar />

      <div className="hero">
        <h1>{HeroTitle}</h1>
        <h4>{HeroSubtitle}</h4>
        <button onClick={handleHeading}>{CTA}</button>
      </div>
    </div>
  );
};

export default Hero;
