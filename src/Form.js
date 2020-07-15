import React from "react";

import "./form.scss";

export default function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
