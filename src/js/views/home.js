import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <Link to="/persons">
                        <img
                            className="d-block w-100"
                            src="https://cdn.mos.cms.futurecdn.net/Rv3YiBSiN2nyiP66iFdTj3-1200-80.jpg"
                            alt="Characters"
                            width={600}
                            height={600}
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Persons</h3>
                        <h4>Learn more about your favorite Star Wars characters</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/planets">
                        <img
                            className="d-block w-100"
                            src="https://wallpapercave.com/wp/Cq0wdqN.jpg"
                            alt="Planets"
                            width={600}
                            height={600}
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Planets</h3>
                        <h4>Learn more about your favorite Star Wars planets</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/ships">
                        <img
                            className="d-block w-100"
                            src="https://www.renderhub.com/squir/star-wars-star-destroyer-with-lights/star-wars-star-destroyer-with-lights-01.jpg"
                            alt="Ships"
                            width={600}
                            height={600}
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>Ships</h3>
                        <h4>Learn more about your favorite Star Wars ships</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};
