import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5-1.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/manas-bhardwaj-arjuna-007/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon"/></a>
                                <a href="https://www.facebook.com/mb11797/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon"/></a>
                                <a href="https://www.instagram.com/mb797/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon"/></a>
                                <a href="https://github.com/mb11797" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Icon"/></a>
                                <a href="https://twitter.com/ManasB11071997" target="_blank" rel="noreferrer"><img src={navIcon5} alt="Icon"/></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}