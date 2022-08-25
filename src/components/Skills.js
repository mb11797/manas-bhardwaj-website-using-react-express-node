import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // Naming can be anything. It depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive1 = {
        superLargeDesktop: {
            // Naming can be anything. It depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            // Naming can be anything. It depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomiIn">
                            <h2>Skills</h2>
                            <br/>
                            <h3>Backend Development</h3>
                            <br />
                            <Carousel responsive={responsive}>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Data Structures <br/>&<br/> Algorithms</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Spring Boot</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Hibernate</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>RabbitMQ</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Servlets</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>JSP</h5>
                                </div>
                            </Carousel>
                            <br/>
                            <h3>Frontend Development</h3>
                            <br/>
                            <Carousel responsive={responsive1}>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                            <br/>
                            <h3>Other</h3>
                            <br/>
                            <Carousel responsive={responsive2}>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Data Science <br/> (Machine Learning <br/> & <br/> Deep Learning) </h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Automation<br/> (Selenium <br/> & <br/> Puppeteer)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="MeterIcon" />
                                    <h5>Databases <br/> (MySQL <br/> & <br/> MongoDB)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="MeterIcon" />
                                    <h5>OS <br/> (Linux, Windows, Mac)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>Cloud <br/> (AWS, Azure)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="MeterIcon" />
                                    <h5>CDN <br/> (Akamai)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="MeterIcon" />
                                    <h5>Tools <br/> (Postman, Git, Github, Gitlab, BitBucket, Jira)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="MeterIcon" />
                                    <h5>Languages <br/> (C, C++, Java, Python, JavaScript)</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="ImageIcon" />
        </section>
    )
}
