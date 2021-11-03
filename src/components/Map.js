import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Map = () => {
  return (
    <div className="bg-white py-5" id="roadmap">
      <h1 className="pb-1 text-center">Road Map</h1>
      <Container fluid>
        <Row className="mx-5">
          <Col
            xs={12}
            lg={{ span: 6, order: 1 }}
            className="px-5 my-auto text-center text-lg-left d-inline"
            data-aos="fade-down-right"
          >
            <Row>
              <Col lg={{ span: 4 }} className="d-flex align-items-center">
                <img
                  className="w-100 circle-hover"
                  src="/road-map-eggs/0.png"
                  alt="0 percent egg"
                />
              </Col>
              <Col>
                <h1
                  style={{ borderBottom: "5px solid #4c6658" }}
                  className="mt-lg-5 mb-3 pt-5"
                >
                  0%
                </h1>
                <p>
                  Pretty Peacocks are set aside for community giveaways and
                  other activities throughout development.
                </p>
                <p>
                  There will be an initial Twitter giveaway where a lucky winner
                  will receive a 1/1 Prized Peacock on mint day.{" "}
                </p>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            lg={{ span: 6, order: 2 }}
            className="px-5 my-auto text-center text-lg-left"
            data-aos="fade-down-left"
          >
            <Row>
              <Col lg={{ span: 4 }} className="d-flex align-items-center">
                <img
                  className="w-100 circle-hover"
                  src="/road-map-eggs/25.png"
                  alt="0 percent egg"
                />
              </Col>
              <Col>
                <h1
                  style={{ borderBottom: "5px solid #4c6658" }}
                  className="mt-5 mb-3 pt-5"
                >
                  20%
                </h1>
                <p>SOL giveaway: 10</p>
                <p>
                  5 Pretty Peacocks will be rewarded to random verified holders
                  (must be in the first 888 holders). There will also be two 1/1
                  Prized Peacocks given away as well.{" "}
                </p>
                <p>Thank you for being an early part of our community!</p>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            lg={{ span: 6, order: 5 }}
            className="px-5 my-auto text-center text-lg-left"
            data-aos="fade-down-right"
          >
            <Row>
              <Col lg={{ span: 4 }} className="d-flex align-items-center">
                <img
                  className="w-100 circle-hover"
                  src="/road-map-eggs/50.png"
                  alt="0 percent egg"
                />
              </Col>
              <Col>
                <h1
                  style={{ borderBottom: "5px solid #4c6658" }}
                  className="mt-5 mb-3 pt-5"
                >
                  50%
                </h1>
                <p>SOL giveaway: 10</p>
                <p>$50,000 Donation to Rainbow Railroad.</p>
                <p>
                  Rainbow Railroad is a charitable organization that helps LGBTQ
                  individuals escape violence and persecution in their home
                  countries.
                </p>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            lg={{ span: 6, order: 6 }}
            className="px-5 my-auto text-center text-lg-left"
            data-aos="fade-down-left"
          >
            <Row>
              <Col lg={{ span: 4 }} className="d-flex align-items-center">
                <img
                  className="w-100 circle-hover"
                  src="/road-map-eggs/75.png"
                  alt="0 percent egg"
                />
              </Col>
              <Col>
                <h1
                  style={{ borderBottom: "5px solid #4c6658" }}
                  className="mt-5 mb-3 pt-5"
                >
                  75%
                </h1>
                <p>SOL giveaway: 10</p>
                <p>
                  Launch of Pretty Peacock Merch shop. Get ready to rep your
                  Peacock!
                </p>
                <p>
                  Further detailed development of the lore, leading into how
                  your Pretty Peacock will help you generate feathers, and eggs
                  (trust me, you will want both!){" "}
                </p>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            lg={{ span: 6, order: 9 }}
            className="px-5 my-auto mx-auto text-center text-lg-left"
            data-aos="fade-down-right"
          >
            <Row>
              <Col lg={{ span: 4 }} className="d-flex align-items-center">
                <img
                  className="w-100 circle-hover"
                  src="/road-map-eggs/100.png"
                  alt="0 percent egg"
                />
              </Col>
              <Col>
                <h1
                  style={{ borderBottom: "5px solid #4c6658" }}
                  className="mt-5 mb-3 pt-5"
                >
                  100%
                </h1>
                <p>Tesla Model 3 Giveaway.</p>
                <p>Party/Meetup in NYC or LA for verified peacock holders. </p>
                <p>
                  Contract influencers in the crypto and in the finance world,
                  as well as have existing connections give AMAs to verified
                  holders.
                </p>
                <p>
                  Announce launch of the first crypto-based content creation
                  community app.{" "}
                </p>
                <p>
                  NFT artists, musicians, streamers as well as crypto
                  influencers etc will be brought onboard.
                </p>
                <p>
                  More information on the app will be announced at this time
                  (hint: certain peacock designs will show sneak peeks!)
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
