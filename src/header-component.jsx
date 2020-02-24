import React from "react";
import "./header-component.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <h1>CryptoPrices</h1>
        <div className="buttons">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
