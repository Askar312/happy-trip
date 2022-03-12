import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        About
      </h1>
      <Link to="/slide">
        <Button>Фотографии</Button>
      </Link>
    </div>
  );
};

export default AboutUs;
