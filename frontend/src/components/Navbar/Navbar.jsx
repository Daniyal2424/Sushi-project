import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch("/json/icons.json")
      .then((response) => response.json())
      .then((data) => setIcons(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="navbar">
      {icons.map((icon) => (
        <Link
          key={icon.id}
          to={`/category${icon.path}`}
          className="navbar-icon"
        >
          <img src={icon.img} alt="" />
          <h3>{icon.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
