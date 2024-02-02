import "./Hero.css";

import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="about">
        <div className="contact">
          <h2>Husanjon Musayev</h2>
          <h3>Frontend Devolper</h3>
          <div className="share">
            <a href="https://www.linkedin.com/in/husanjon-musayev-893a9829a/">
              <img src="/linkedin.png" alt="linkedin_icon" />
            </a>
            <a href="#">
              <img src="/telegram.png" alt="telegram_icon" />
            </a>
            <a href="#">
              <img src="/phone.png" alt="phone_Icon" />
            </a>
          </div>
        </div>
        <div className="title">
          <h3>
            Ushbu sahifada men yaratkan loihalan Korib chiqishingiz va Sahifada
            Yaratilagan saytlarni Yutube kanalimda ko'rib qayta yaratishingiz
            mumkin Omad !
          </h3>
          <a href="www@husanjonmusayev">
            <img src="/youtube.png" alt="youtube_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
