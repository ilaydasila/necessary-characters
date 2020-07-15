import React from "react";

import "./footer.scss";

export default function Footer({ children }) {
  return (
    <footer className='footer-style'>
      <div>{children}</div>
    </footer>
  );
}
