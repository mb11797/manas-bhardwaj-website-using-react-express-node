import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import videoCallCardImage from "../assets/img/video-call-img.jpeg";
import imageGalleryCardImage from "../assets/img/image-gallery-img.jpeg";
import textingAppCardImage from "../assets/img/texting-app-img.jpeg";
import paytmPaymentsGatewayCardImage from "../assets/img/paytm-payments-gateway-img.png";
import urlShortenerCardImage from "../assets/img/url-shortener-img.jpeg";
import coronaVirusTrackerCardImage from "../assets/img/corona-virus-tracker-img.png";
import spreadsheetExcelCloneCardImage from "../assets/img/spreadsheet-excel-clone-img.png";
import tourOfHeroesCardImage from "../assets/img/Tour-of-Heroes-gif.gif";
import hackerrankAutomationCardImage from "../assets/img/hackerrank-automation-img.png";
import diseasePredictionAndTrackingCardImage from "../assets/img/disease-prediction-and-tracking-img.png";
import automatePepCodingCardImage from "../assets/img/automate-pep-coding-img.gif";
import disasterManagementCardImage from "../assets/img/disaster-management-img.avif";
import fbLikesAutomationCardImage from "../assets/img/fb-likes-automation-img.png";
import fbAutomationCardImage from "../assets/img/fb-automation-img.jpeg";
import webScrapingCricInfoCardImage from "../assets/img/web-scraping-cricinfo-img.png";
import vyakhyaOcrCardImage from "../assets/img/vyakhya-ocr-img.webp";
import fileSystemCLIUtilityCardImage from "../assets/img/file-system-cli-utility-img.gif";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects1 = [
        {
            title: "Video-Calling-App",
            description: "Design & Development",
            imgUrl: videoCallCardImage,
            liveUrl: "https://watch-and-talk.netlify.app/",
            codeUrl: "https://github.com/mb11797/Video-Calling-App-Using-React-Express-Node-WebRTC"
        },
        {
            title: "Image-Gallery-App",
            description: "Design & Development",
            imgUrl: imageGalleryCardImage,
            liveUrl: "http://ec2-65-2-140-226.ap-south-1.compute.amazonaws.com:8000/",
            codeUrl: "https://github.com/mb11797/Image-Gallery-App-using-SpringBoot-deployed-AWS-EC2-RDS"
        },
        {
            title: "Texting-App",
            description: "Design & Development",
            imgUrl: textingAppCardImage,
            liveUrl: "https://texting-app-manas.herokuapp.com/",
            codeUrl: "https://github.com/mb11797/Texting-App-using-WebSocket-SpringBoot-JS-STOMP"
        },
        {
            title: "Gateway-PayTm-Payments-App",
            description: "Design & Development",
            imgUrl: paytmPaymentsGatewayCardImage,
            liveUrl: "https://paytm-payments-app.herokuapp.com/",
            codeUrl: "https://github.com/mb11797/PayTm-Payments-App-using-Spring-Boot"
        },
        {
            title: "URL-Shortener",
            description: "Design & Development",
            imgUrl: urlShortenerCardImage,
            liveUrl: "http://ec2-43-205-206-234.ap-south-1.compute.amazonaws.com:6001/",
            codeUrl: "https://github.com/mb11797/url-shortener-using-node-express-mongodb"
        },
        {
            title: "Corona-Virus-Tracker",
            description: "Design & Development",
            imgUrl: coronaVirusTrackerCardImage,
            liveUrl: "https://corona-virus-tracker-app-manas.azurewebsites.net/",
            codeUrl: "https://github.com/mb11797/corona-virus-tracker-app-using-spring-boot"
        },
    ];

    const projects2 = [
        {
            title: "Tour-of-Heroes-Web-Application",
            description: "Design & Development",
            imgUrl: tourOfHeroesCardImage,
            liveUrl: "https://github.com/mb11797/Tour-of-Heroes-Web-Application-using-Angular-Frontend-and-Remote-Data-Server",
            codeUrl: "https://github.com/mb11797/Tour-of-Heroes-Web-Application-using-Angular-Frontend-and-Remote-Data-Server"
        },
        {
            title: "Spreadsheet-Excel-Clone-using-Electron-and-NodeJS",
            description: "Design & Development",
            imgUrl: spreadsheetExcelCloneCardImage,
            liveUrl: "https://github.com/mb11797/Spreadsheet-Excel-Clone-using-Electron-and-NodeJS",
            codeUrl: "https://github.com/mb11797/Spreadsheet-Excel-Clone-using-Electron-and-NodeJS"
        },
        {
            title: "Automate-Hackerrank-Challenge-Creation-Updation-And-Moderator-Addition-using-Selenium",
            description: "Design & Development",
            imgUrl: hackerrankAutomationCardImage,
            liveUrl: "https://github.com/mb11797/Automate-Hackerrank-Challenge-Creation-Updation-And-Moderator-Addition-using-Selenium",
            codeUrl: "https://github.com/mb11797/Automate-Hackerrank-Challenge-Creation-Updation-And-Moderator-Addition-using-Selenium"
        },
        {
            title: "Automation-using-Selenium-and-nodeJS-to-submit-code-and-downloading-test-cases-in-chrome",
            description: "Design & Development",
            imgUrl: automatePepCodingCardImage,
            liveUrl: "https://github.com/mb11797/Automation-using-Selenium-and-nodeJS-to-submit-code-and-downloading-test-cases-in-chrome",
            codeUrl: "https://github.com/mb11797/Automation-using-Selenium-and-nodeJS-to-submit-code-and-downloading-test-cases-in-chrome"
        },
        {
            title: "File-System-Command-Line-Utility-using-NodeJS",
            description: "Design & Development",
            imgUrl: fileSystemCLIUtilityCardImage,
            liveUrl: "https://github.com/mb11797/File-System-Command-Line-Utility-using-NodeJS",
            codeUrl: "https://github.com/mb11797/File-System-Command-Line-Utility-using-NodeJS"
        },
        {
            title: "Disaster Relief Management and Rehabiliation",
            description: "Design & Development",
            imgUrl: disasterManagementCardImage,
            liveUrl: "https://github.com/mb11797/hackBVP",
            codeUrl: "https://github.com/mb11797/hackBVP"
        },
    ];

    const projects3 = [
        {
            title: "Disease Prediction & Tracking using DL & ML",
            description: "Design & Development",
            imgUrl: diseasePredictionAndTrackingCardImage,
            liveUrl: "https://github.com/mb11797/arjuna_hackDTU",
            codeUrl: "https://github.com/mb11797/arjuna_hackDTU"
        },
        {
            title: "Scraping-the-Web-for-Cricket-Info-using-NodeJS",
            description: "Design & Development",
            imgUrl: webScrapingCricInfoCardImage,
            liveUrl: "https://github.com/mb11797/Scraping-the-Web-for-Cricket-Info-using-NodeJS",
            codeUrl: "https://github.com/mb11797/Scraping-the-Web-for-Cricket-Info-using-NodeJS"
        },
        {
            title: "Automate-Facebook-to-like-any-number-of-posts-on-any-page-using-puppeteer-in-NodeJS",
            description: "Design & Development",
            imgUrl: fbLikesAutomationCardImage,
            liveUrl: "https://github.com/mb11797/Automate-Facebook-to-like-any-number-of-posts-on-any-page-using-puppeteer-in-NodeJS",
            codeUrl: "https://github.com/mb11797/Automate-Facebook-to-like-any-number-of-posts-on-any-page-using-puppeteer-in-NodeJS"
        },
        {
            title: "Automate-Facebook-Posts-Liking-on-a-Given-Page-s-using-Puppeteer-in-Ruby",
            description: "Design & Development",
            imgUrl: fbAutomationCardImage,
            liveUrl: "https://github.com/mb11797/Automate-Facebook-Posts-Liking-on-a-Given-Page-s-using-Selenium-in-Ruby",
            codeUrl: "https://github.com/mb11797/Automate-Facebook-Posts-Liking-on-a-Given-Page-s-using-Selenium-in-Ruby"
        },
        {
            title: "Automate-Moderator-Addition-in-Hackerrank-Challenge-using-puppeteer-in-NodeJS",
            description: "Design & Development",
            imgUrl: hackerrankAutomationCardImage,
            liveUrl: "https://github.com/mb11797/Automate-Moderator-Addition-in-Hackerrank-Challenge-using-puppeteer-in-NodeJS",
            codeUrl: "https://github.com/mb11797/Automate-Moderator-Addition-in-Hackerrank-Challenge-using-puppeteer-in-NodeJS"
        },
        {
            title: "Vyakhya",
            description: "Design & Development",
            imgUrl: vyakhyaOcrCardImage,
            liveUrl: "https://github.com/mb11797/Vyakhya",
            codeUrl: "https://github.com/mb11797/Vyakhya"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => 
                                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <br/>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects3.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="imageIcon"/>
        </section>
    )
}
