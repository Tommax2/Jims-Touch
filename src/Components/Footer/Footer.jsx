import React from "react";
import "./Footer.css";
import "boxicons"; // Import boxicons

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Jims touch</h1>
        <p>Get the best items from our store at the best prices.</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Offers</li>
          <li>Popular</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a
              href="https://wa.me/message/BPJEWHG2JCFDM1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon type="logo" name="whatsapp"></box-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@jimstouch?_r=1&_d=egfj7jl3dgf5d9&sec_uid=MS4wLjABAAAA0n0iK2dn-HRIxNhPiNc7g6feavxhkohwFx8rv9PDk9FBPF7bp6LOKLH2acWmNAkV&share_author_id=6942521612106695686&sharer_language=en&source=h5_m&u_code=dhi8a3gjgd2kmf&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAA0n0iK2dn-HRIxNhPiNc7g6feavxhkohwFx8rv9PDk9FBPF7bp6LOKLH2acWmNAkV&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=6942521612106695686&share_link_id=AA10A367-24E9-4D1F-9440-5AACABB313BB&share_app_id=1233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon type="logo" name="tiktok"></box-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jims_touch?igsh=MXhhZGVpdGZucHYzbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon type="logo" name="instagram"></box-icon>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>&copy; 2025 Jims touch. All rights reserved.</p>
      </div>
    </div>
  );
};
