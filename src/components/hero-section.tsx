import ImageHero from "../assets/image-hero.png";

const HeroSection = () => {
  return (
    <section className="container-fluid p-0 ">
      <img className="img-fluid w-100" src={ImageHero} alt="imagen-hero" />
    </section>
  );
};

export default HeroSection;
