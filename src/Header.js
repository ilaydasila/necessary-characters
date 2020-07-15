import React from "react";

import "./header.scss";

export default function Header({ children }) {
  return <header className='container'>{children}</header>;
}
