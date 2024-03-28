const Home = () => {
  return (
    <>
      {" "}
      <div
        style={{
          backgroundImage:
            "url('../public/images/pexels-david-besh-884788.jpg')",
          backgroundSize: "cover",
          height: "100px",
          width: "100px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "green",
            borderRadius: "50%",
            position: "absolute",
            bottom: "0",
            right: "1rem",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
