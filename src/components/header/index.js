import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to="/" id="menuTitle">
          <Image src="../../logo_menu.png" className="menu" />
          &nbsp;
          <b>
            <i>Doctor Search</i>
          </b>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Header;
