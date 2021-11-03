import React from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";

export const FAQ = () => {
  return (
    <div className="bg-light my-5" id="faq">
      <Container>
        <h1 className="pb-3 text-center">FAQ</h1>
        <Row>
          <Col xs={{ span: 12, offset: 0 }}>
            <Jumbotron className="mb-0">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    I’m new to the NFT world. What exactly is a NFT?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      NFT stands for “Non-Fungible Token”, which simply means
                      that it is a unique, one-of-a-kind digital asset in the
                      blockchain. NFT’s can be bought, sold, or traded and
                      represent ownership of real world items such as art,
                      music, etc.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    What are Pretty Peacocks?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Pretty Peacocks are 10,000 eloquently designed, hand
                      illustrated and randomly generated collectible NFTs
                      hatching from eggs and gathering in their sanctuary.
                      Pretty Peacocks will gather on MagicEden, a premier
                      marketplace on the Solana network. This comes with
                      benefits such as almost nonexistent gas fees as opposed to
                      OpenSea. Not only can you use your Peacock avatar to be a
                      part of an exclusive community, Pretty Peacocks is also
                      engineered to benefit great causes.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    How much does it cost to mint a Pretty Peacock? What’s the
                    total supply?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Mint cost is TBD. There will be a total of 10,000
                      peacocks. Please note that 200 peacocks will be reserved
                      for the team and marketing purposes.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Will there be a whitelist? What about a presale? How do I
                    get on the whitelist?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p>
                        Yes, we will have a total of 1,500 whitelist spots
                        available. Presale will happen one day before public
                        launch.
                      </p>
                      <p>
                        As we believe authentic community engagement truly makes
                        or breaks the project's longevity, we will be holding a
                        wide variety of contests for members to obtain a
                        whitelist slot.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    I see other NFTs have a cause for donations. Who is yours?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      We are glad that you asked. As peacocks are not considered
                      endangered, but rather quite populated(that’s why we have
                      10,000 available), we will donate to Rainbow Railroad.
                      This charity focuses on helping LGBTQ escape lives of
                      persecution in their home country and fly and live a free
                      and peaceful life, just like our peacocks. Together, with
                      this donation, we will be drastically saving the lives of
                      at least two individuals, providing them with the
                      necessary funding and tools for resettlement and
                      adjustment to Canada.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    Ok, I want a Pretty Peacock RIGHT NOW!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body>
                      Please wait for our official launch date in Late November.
                      In the meantime, participate in any of our contests for
                      the whitelist position!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
