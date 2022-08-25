import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import gaanaIconCardImage from "../assets/img/gaana-icon-img.png";
import scalerIconCardImage from "../assets/img/scaler-icon-img.webp";
import cleartrailIconCardImage from "../assets/img/cleartrail-icon-1-img.png";
import pepcodingIconCardImage from "../assets/img/pepcoding-icon-img.jpeg";
import cdacIconCardImage from "../assets/img/cdac-icon-img.jpeg";
import utsIconImage from "../assets/img/uts-icon-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Experiences = () => {

    const experiences1 = [
        {
            company: "Gaana.com (Times Internet)",
            role: "Software Developer",
            duration: "(Aug, 2021-Present)",
            imgUrl: gaanaIconCardImage,
            link: "https://gaana.com/",
            urls: [],
            workDescription: ["From scratch created 2 Services for Dolby Atmos Encoding & Uploading to CDN", "From scratch created 2 Services for Automated Validation of Audio Content", "Provided Versioning in HLS Services, report downloads in Vendor Dashboard", "Manage services of audio ingestion including HLS Conversion & pushing to CDN", "Provided REST APIs in many Services. Automated handling of Redirecting Feeds."]
        },
        {
            company: "Scaler Academy (InterviewBit)",
            role: "Teaching Assistant",
            duration: "",
            imgUrl: scalerIconCardImage,
            link: "https://www.scaler.com/academy/",
            urls: [],
            workDescription: ["Online TA for Data Structures & Algorithms doubts. "]
        },
        {
            company: "Scaler Academy (InterviewBit)",
            role: "Technical Content Writer",
            duration: "",
            imgUrl: scalerIconCardImage,
            link: "https://www.interviewbit.com/practice/",
            urls: ["https://www.scaler.com/topics/marker-interface-in-java/", "https://www.scaler.com/topics/java/error-vs-exception-in-java/", "https://www.scaler.com/topics/html-is-case-sensitive-language/", "https://www.scaler.com/topics/java/create-file-in-java/"],
            workDescription: ["Publish Technical Content for Java and System Design."]
        },
        {
            company: "ClearTrail Technologies (Impetus)",
            role: "Associate Software Engineer",
            duration: "(Sep, 2020-Aug, 2021)",
            imgUrl: cleartrailIconCardImage,
            link: "https://clear-trail.com/",
            urls: [],
            workDescription: ["Created Network Traffic Data Monitoring utility libraries (from pcap files) in C++.", "Built a fullstack File Indexing Engine from scratch with Java Backend & Angular Frontend involving multithreading.", "Handled Scheduler Microservice & ResultSet Cache Microservice in Product Klera’s Backend. Provided new types of Alerts & Triggers and various other features. Optimized & fixed the existing codebase for efficieny & bugs."]
        },
        {
            company: "PepCoding",
            role: "Web Development Intern",
            duration: "(Mar, 2020-Aug, 2020)",
            imgUrl: pepcodingIconCardImage,
            link: "https://www.pepcoding.com/",
            urls: [],
            workDescription: ["Developed File System Utility Libraries, wrote Automation Scripts, Web Scraping scripts, etc using NodeJS, Selenium, Electron, etc. ", "Online TA for DSA Doubts. "]
        },
        {
            company: "CDAC",
            role: "Deep Learning Research Intern",
            duration: "(Jun, 2018-Jul, 2018)",
            imgUrl: cdacIconCardImage,
            link: "https://www.cdac.in/",
            urls: [],
            workDescription: ["Wrote DL and ML algorithms. Made a Flask Server & an android application for the model.", "Worked on PyTorch & Tensorflow, and transfer learning over CNNs."]
        }
    ];

    const experiences2 = [
        {
            company: "Unique Touch Solutions",
            role: "Data Science Intern",
            duration: "(Aug, 2018-Nov, 2018)",
            imgUrl: utsIconImage,
            link: "https://www.indiamart.com/uniquetouch-solutions-delhi/aboutus.html",
            urls: [],
            workDescription: ["Created Machine Learning & Deep Learning Models for Classification and applied Natural Language Processing to apply text classification and summarizing."]
        }
    ];

    return (
        <section className="experience" id="experiences">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => 
                                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Experiences</h2>
                                    {/* <p>Lorem Ipsum<br></br>Lorem Ipsum</p> */}
                                    <br/>
                                    <Tab.Container id="experiences-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row className="exp-card">
                                                    {
                                                        experiences1.map((experience, index) => {
                                                            return (
                                                                <ExperienceCard
                                                                    key={index}
                                                                    {...experience}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <Row>
                                                    {
                                                        experiences2.map((experience, index) => {
                                                            return (
                                                                <ExperienceCard
                                                                    key={index}
                                                                    {...experience}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Icon"/>
        </section>
    )
}
