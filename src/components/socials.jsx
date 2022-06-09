import * as React from "react"
import { Row, Image } from "react-bootstrap";
import Github from "../images/github.svg";
import Resume from "../images/file.svg";
import LinkedIn from "../images/linkedin.svg";

const Socials = () => {
    return (
        <div className="socials">
            <Row><Image src={Github}/></Row>
            <Row><Image src={LinkedIn} /></Row>
            <Row><Image src={Resume} /></Row>
        </div>

    );
}

export default Socials