import React from "react";
import {Menu, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Link to="/">
            <Menu.Item name="Home" />
          </Link>
        </Container>
      </Menu>
    </div>
  );
}
