import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

export const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="light"
      expand="lg"
      style={{ borderRadius: "2px" }}
      className="px-5 text-lg"
    >
      <Navbar.Brand href="/">
        <h1>Pretty Peacocks</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="ml-auto">
                    </Nav> */}
        <Nav className="ml-auto">
          <Nav.Link
            className="my-auto"
            onClick={() =>
              scroller.scrollTo("countdown", {
                smooth: true,
                offset: 0,
                duration: 500,
              })
            }
          >
            Mint
          </Nav.Link>
          <Nav.Link
            className="my-auto"
            onClick={() =>
              scroller.scrollTo("roadmap", {
                smooth: true,
                offset: 0,
                duration: 500,
              })
            }
          >
            Road Map
          </Nav.Link>
          <Nav.Link
            className="my-auto"
            onClick={() =>
              scroller.scrollTo("team", {
                smooth: true,
                offset: 0,
                duration: 500,
              })
            }
          >
            Team
          </Nav.Link>
          <Nav.Link
            className="my-auto"
            onClick={() =>
              scroller.scrollTo("faq", {
                smooth: true,
                offset: 0,
                duration: 500,
              })
            }
          >
            FAQ
          </Nav.Link>
          <Nav.Link
            href="https://www.worldanvil.com/w/the-aviary-shnato/map/547024d8-2605-4716-94b9-eef71ece212f"
            target="_blank"
            className="my-auto mr-4"
          >
            Lore
          </Nav.Link>
          <Nav.Link href="https://www.twitter.com/PeacocksNFT" target="_blank">
            <i className="fab fa-twitter fa-2x text-white" />
          </Nav.Link>
          <Nav.Link href="https://discord.gg/U7UwES6M69" target="_blank">
            <i className="fab fa-discord fa-2x text-white" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
