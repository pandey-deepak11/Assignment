import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        marginTop: "100px",
      }}
    >
      <Link
        style={{
          border: "1px solid black",
          textDecoration: "none",
          padding: "10px 10px",
        }}
        to="/form1"
      >
        Form 1
      </Link>
      <Link
        style={{
          border: "1px solid black",
          textDecoration: "none",
          padding: "10px 10px",
        }}
        to="/form2"
      >
        Form 2
      </Link>
    </div>
  );
};

export default Home;
