import React from "react";
import "./navbar.css";
import { TextInput } from "@mantine/core";
function Demo() {
  return <TextInput placeholder="search" radius="xl" size="sm" required />;
}
function Navbar() {
  return (
    <div className="container">
      <nav>
        <div>
          <img src="./images/logo.png" width={60} />
        </div>
        <div>
          <ul className="list">
            <li>men</li>
            <li>women</li>
            <li>kids</li>
          </ul>
        </div>
        <div>
          <Demo />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
