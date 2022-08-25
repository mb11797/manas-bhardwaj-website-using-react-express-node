import { useState, useEffect } from "react";
import { Col, Row, Alert, Nav } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
    const [ email, setEmail ] = useState('');
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        if(status === 'success')
            clearFields();
    }, [status]);

    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }
    */

    const clearFields = () => {
        setEmail('');
    }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('#home')}><button type="submit">Submit</button></Nav.Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}