import React, { useEffect } from "react";
import { Container, Row, Button, Nav } from "react-bootstrap";
import Aos from "aos";
import { FAQ } from "../components/FAQ";
import "aos/dist/aos.css";
import { Team } from "../components/Team";
import { Map } from "../components/Map";
import { PrizedPeacocks } from "../components/PrizedPeacocks";
import { scroller } from "react-scroll";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100, once: true });
  }, []);

  return (
    <div>
      <div>
        <img
          className="w-100 banner"
          src="/banner.jpeg"
          alt="Pretty Peacock Banner"
        />
      </div>
      <div className="bg-success d-flex justify-content-between align-items-center py-3">
        <div className="w-25">
          <img className="trees" src="/left-tree.png" alt="Tree on the left." />
        </div>
        <div>
          <h2 className="d-flex justify-content-center">How It All Began...</h2>
          <div>
            <p>
              The year is 3000. Turn of a new millenium. Civilization as
              "humans" know it has not existed for over 500 years.
            </p>
            <p>
              A single Peacock by the name of Perry wanders aimlessly in search
              of friends or any living thing that is not a plant.
            </p>
            <p>
              He quickly discovers two of his kind, albeit aesthetically much
              different, who were equally as lost in this world as he was.
            </p>
            <p>
              As the trio ventured further down the path they make a somewhat
              eerie discovery...
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="btn btn-secondary btn-lg w-25"
              onClick={() =>
                scroller.scrollTo("prized_peacocks", {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                })
              }
            >
              Learn More
            </Nav.Link>
          </div>
        </div>
        <div className="w-25">
          <img
            className="trees"
            src="/right-tree.png"
            alt="Tree on the right."
          />
        </div>
      </div>
      <div className="bg-success grass"></div>
      <div className="bg-secondary py-5" id="countdown">
        <Container data-aos="fade-up" data-aos-duration="2000">
          <h1 className="mb-4 text-center text-white">
            Sale Goes Live At The End of November
          </h1>
        </Container>
        <Row className="mt-4">
          <Button className="mx-auto" variant="primary" size="lg">
            Adopt a Peacock
          </Button>
        </Row>
      </div>
      <PrizedPeacocks />
      <Map />
      <Team />
      <FAQ />
    </div>
  );
};
