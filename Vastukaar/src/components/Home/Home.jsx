import "./home.css";
const Home = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay muted loop id="background-video">
          <source
            src="../../../public/Videos/2450251-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="video-text">
          <h1>Elevate your experience</h1>
          <p>
            We shape how everyday people interact with and experience new
            technologies and services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
