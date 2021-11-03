import React from "react";
import { Container, Nav, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="bg-secondary py-4">
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-white">Pretty Peacocks</h1>
        </Row>
        {/* <Row className="justify-content-center">
                    <h3 className="text-white">Follow us on</h3>
                </Row> */}
        <Row className="justify-content-center">
          <Nav>
            <h4 className="text-white my-auto">Follow us on</h4>
            <Nav.Link
              href="https://www.twitter.com/PeacocksNFT"
              target="_blank"
              className="px-3"
            >
              <i className="fab fa-twitter fa-2x text-white" />
            </Nav.Link>
            <Nav.Link
              href="https://discord.gg/U7UwES6M69"
              target="_blank"
              className="px-0"
            >
              <i className="fab fa-discord fa-2x text-white" />
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </div>
  );
};
