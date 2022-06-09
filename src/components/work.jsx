import React, {useEffect, useRef} from "react"
import { Row, Col, Container } from "react-bootstrap"
import { gsap } from "gsap";

const Work = () => {
    const bounceRef = useRef();
    const fadeRef = useRef();

    useEffect(() => {
        gsap.fromTo(fadeRef.current,
            {
                opacity: 0
            },
            {
                duration: 3,
                ease:"power1",
                opacity: 1
            }
        );
    });

    return (
        <Container fluid className="work-container" ref={fadeRef}>
            <Row classname="info-intro">
                <Col>
                <h2>Nice to meet you!</h2>
                <p>I'm Avery, a software student at GMU who works in front end development.</p>
                </Col>
            </Row>
            <Row classname="info-body">
                <Col>
                <br></br>
                <h1>Experience</h1>
                <h3>The Cru | SWE Intern</h3>
                <p>Collaborated with the Product, Design and Marketing team to rapidly build prototypes to test and iterate that evolved into working components</p>
                <h3>Student Centers @ GMU | Front End Developer</h3>
                <p>Designed and developed over 20 unique pages to specific requirements from 3 different departments </p>
                <p>Worked with marketing team to improve SEO strategy and increase organic traffic</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Work