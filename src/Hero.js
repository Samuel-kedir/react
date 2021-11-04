import Navbar from "./Navbar";

const Hero = (props) => {
  return (
    <div className="heroBack">
      <Navbar />

      <div className="hero">
        <h1>{props.HeroTitle}</h1>
        <h4>{props.HeroSubtitle}</h4>
        <button>{props.CTA}</button>
      </div>
    </div>
  );
};

export default Hero;
