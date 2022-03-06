import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Map = () => {
  return (
    <div className="bg-white py-5" id="roadmap">
      <h1 className="pb-1 text-center">Perry's Map</h1>
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
                Pretty Peacocks are set aside for community giveaways and other activities throughout development.
                </p>
                <p>
                On mint day we will host a giveaway in our Discord and one lucky community member will win a 1/1 Prized Peacock. 
{" "}
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
                  25%
                </h1>
                <p>
                5 Pretty Peacocks will be rewarded to random verified holders (must be in the first 1000 holders). There will also be another 1/1 Prized Peacock given away to a random discord member who is at least level 10 in the server. {" "}
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
                <p>Tesla Model 3 Giveaway</p>
                <p>
                Announcement of Mobile App and further detailed development of the lore. Hint:  your Pretty Peacock may drop valuable feathers pr even lay eggs (trust me, you will want both!)
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
                <p>Party/Meetup in NYC or LA for verified peacock holders. </p>
                <p>
                Announce launch of the first crypto-based content creation community app. Verified Peacock holders will gain early access and be able to earn exponentially more feathers and eggs (you'll find out what that means soon!) 
                </p>
                <p>
                  Announce launch of the first crypto-based content creation
                  community app.{" "}
                </p>
                <p>
                NFT artists, musicians, streamers as well as crypto influencers etc will be brought onboard. We want to give every talented person an opportunity to make a living and continue doing what they love. Just like every Peacock, every creator is talented in their own unique way.
                </p>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
