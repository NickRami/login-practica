import HeroSection from "../components/hero-section";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <header
        className="shadow bg-body-tertiary rounded"
        style={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        <Navbar />
      </header>
      <HeroSection />
    </>
  );
};

export default Home;
