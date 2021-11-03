import React from "react";
import { Col, Container, Row, Nav, Image } from "react-bootstrap";

export const Team = () => {
  return (
    <div className="bg-success py-5" id="team">
      <h1 className="pt-5 text-center">Our Team</h1>
      <Container>
        <Row>
          <Col xs={10} lg={2} className="text-center pt-4 text-sm mx-auto">
            <Image
              src="\SJTeamPic2.png"
              roundedCircle
              style={{ width: "100%", maxWidth: "450px" }}
              className="my-3 circle-hover"
            />
            <h3 className="mt-3 mb-0">SJ</h3>
            <h5 className="">Founder</h5>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p className="mb-3">
                    He has been an experienced Crypto trader since 2015. Lived
                    and breathed operations and marketing in the normie world,
                    now looking to do so in the metaverse.
                  </p>
                </div>
                <div class="flip-card-back">
                  <h5 className="mt-1 mb-1">Fun Fact:</h5>
                  <p className="mb-3">
                    Discovered bitcoin accidentally in 2011 while searching for
                    runescape miner bots but didn't buy/mine any btc. Just high
                    school things.
                  </p>
                </div>
              </div>
            </div>
            <Nav.Link href="https://www.twitter.com/sjxbt" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </Nav.Link>
          </Col>
          <Col xs={10} lg={2} className="text-center pt-4 mx-auto">
            <Image
              src="\KeiTeamPic.png"
              roundedCircle
              style={{ width: "100%", maxWidth: "450px" }}
              className="my-3 circle-hover"
            />
            <h3 className="mt-3 mb-0">Kei</h3>
            <h5 className="">Artist</h5>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p className="mb-3">
                    She is an upcoming artist that loves to experiment with
                    different styles. Hopes to obtain the power to draw
                    everything one day.
                  </p>
                </div>
                <div class="flip-card-back">
                  <h5 className="mt-4 mb-1">Fun Fact:</h5>
                  <p className="mb-3">
                    Consumes an alarming amount of sweets a day.
                  </p>
                </div>
              </div>
            </div>

            <Nav.Link href="https://www.twitter.com/keiiiarts" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </Nav.Link>
          </Col>
          <Col xs={10} lg={2} className="text-center pt-4 mx-auto">
            <Image
              src="\JTeamPic.png"
              roundedCircle
              style={{ width: "100%", maxWidth: "450px" }}
              className="my-3 circle-hover"
            />
            <h3 className="mt-3 mb-0">J</h3>
            <h5 className="">Lead Developer</h5>
            <p className="mb-3"></p>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p className="mb-3">
                    He is a Blockchain/Web3.0/Smart Contract expert. Hopes his
                    knowledge will leave an impact on the metaverse.{" "}
                  </p>
                </div>
                <div class="flip-card-back">
                  <h5 className="mt-1 mb-1">Fun Fact:</h5>
                  <p className="mb-3">
                    Can swim really well, just like peacocks. Except peacocks
                    can't.{" "}
                  </p>
                </div>
              </div>
            </div>

            <Nav.Link
              href="https://www.twitter.com/PeacocksNFT"
              target="_blank"
            >
              <i className="fab fa-twitter fa-2x" />
            </Nav.Link>
          </Col>
          <Col xs={10} lg={2} className="text-center pt-4 mx-auto">
            <Image
              src="\SheepCupTeamPic.png"
              roundedCircle
              style={{ width: "100%", maxWidth: "450px" }}
              className="my-3 circle-hover"
            />
            <h3 className="mt-3 mb-0">Sheep Cup</h3>
            <h5 className="">Developer</h5>
            <p className="mb-3"></p>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p className="mb-3">
                    He is a Blockchain/developer turned Web 3.0 enthusiast
                    honing his skills in preparation for the metaverse.
                    Perpetually hovering between "in it for the tech" or WGMI.
                  </p>
                </div>
                <div class="flip-card-back">
                  <h5 className="mt-1 mb-1">Fun Fact:</h5>
                  <p className="mb-3"> Has a weird affinity for sheep.</p>
                </div>
              </div>
            </div>
            <Nav.Link href="https://www.twitter.com/sheepcup" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </Nav.Link>
          </Col>
          <Col xs={10} lg={2} className="text-center pt-4 mx-auto">
            <Image
              src="\AsukiTeamPic.png"
              roundedCircle
              style={{ width: "100%", maxWidth: "450px" }}
              className="my-3 circle-hover"
            />
            <h3 className="mt-3 mb-0">Asuki</h3>
            <h5 className="">Community Manager</h5>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p className="mb-3">
                    She is a discord wizard and master of bridging core and
                    community. New to the NFT/Crypto space, but not new to 30k
                    member discords.
                  </p>
                </div>
                <div class="flip-card-back">
                  <h5 className="mt-1 mb-1">Fun Fact:</h5>
                  <p className="mb-3">
                    Always wanted a cat until she found out she was allergic to
                    cats at a cat cafe for her birthday. Still wants a cat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <Nav.Link href="https://www.twitter.com/arukanux" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
