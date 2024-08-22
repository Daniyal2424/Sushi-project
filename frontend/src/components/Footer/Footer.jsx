import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <h2>Mysato Sushi</h2>
        <p>Меню</p>
        <p>Доставка</p>
        <p>Рестораны</p>
        <p>Акции</p>
        <p>Контакты</p>
        <p>Обратная связь</p>
      </div>
      <div className="footer-restaurant">
        <h2>Рестораны</h2>
        <p>
          <i className="bx bx-map"></i>г Алматы, проспект Aль-Фараби 77/8
        </p>
        <p>
          <i className="bx bx-map"></i>г Алматы, Мауленова 92
        </p>
      </div>
      <div className="footer-delivery">
        <h2>Единый номер доставки</h2>
        <p>
          <i className="bx bxs-phone"></i>+7 708 513 9166
        </p>
        <p>
          <i className="bx bx-time-five"></i>с 10:00 до 23:00
        </p>
      </div>
      <div className="footer-social">
        <h2>Мы в соц. сетях</h2>
        <i className="bx bxl-instagram-alt"></i>
        <i className="bx bxl-vk"></i>
        <i className="bx bxl-facebook-square"></i>
        <i className="bx bxl-whatsapp-square"></i>
        <h2>Принимаем к оплате</h2>
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/975/572/original/visa-logo-visa-icon-transparent-free-png.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
