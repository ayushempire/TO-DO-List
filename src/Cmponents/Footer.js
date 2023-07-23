import React from "react";
import "./footer.css";

export default function Footer() {
  let footerStyle = {
    border: "1px solid lightgrey",
    position: "relative",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyerite &copy; mytodolist.com</p>
    </footer>
  );
}
