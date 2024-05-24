import React from "react";
import "./Footer.css";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">{emoji("Made with ❤️ and coffee")}</p>
    </div>
  );
}
