import { useState, useEffect } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Developer", "Full Stack Developer", "Backend Developer", "Teaching Assistant", "Technical Content Writer", "Coding Mentor"];
    const period = 1000;
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            // setDelta(prevDelta => prevDelta/4);
            setDelta(50);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        }
        else{
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to My Portfolio</span>
                                    <h1>{`Hi! I'm Manas - `} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Software Developer", "Full Stack Developer", "Backend Developer", "Teaching Assistant", "Technical Content Writer", "Coding Mentor"]'><span className="wrap">{text}</span></span></h1>
                                    <p className="summary">Inquisitive & energetic Computer Science Graduate with strong foundation in programming logic. Seeking opportunities where I can make the best use of my skill-sets & learn about new technology stacks.</p>
                                    {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button */}
                                    {/* <button onClick="hashlink.to='#connect'">Let's Connect <ArrowRightCircle size={25}/></button> */}
                                    <Nav.Link href="#connect" onClick={() => onUpdateActiveLink('#connect')}>Let's Connect <ArrowRightCircle size={30}/></Nav.Link>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
