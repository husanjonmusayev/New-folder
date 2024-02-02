import "./Header.css";

import React from "react";

export default function Header() {
  return (
    <header>
      <div className="content">
        <div className="form">
          <img src="/search.png" alt="loupIcon" />
          <input type="text" placeholder="search.." />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">MY Projects</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav></nav>
    </header>
  );
}
