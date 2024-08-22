import React from "react";
import "../main.scss";

const Restaurant = () => {
  return (
    <div className="main">
      <p>Главная</p>
      <h1>РЕСТОРАН</h1>
      <h4>проспект Aль-Фараби 77/8, Алматы 050040</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13808.91732046742!2d76.93385076736156!3d43.22467335518559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2skz!4v1721816356960!5m2!1sru!2skz"
        width="1280"
        height="550"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Restaurant;
