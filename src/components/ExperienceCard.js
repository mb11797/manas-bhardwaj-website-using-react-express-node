import { Col } from 'react-bootstrap';

export const ExperienceCard = ({ company, role, duration, imgUrl, link, urls, workDescription }) => {
    return (
        <Col size={12} sm={6} md={4}>
            {/* <div className='experience-imgbx'>
                <img src={imgUrl} />
                <div className='experience-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <a href={liveUrl} target="_blank">Live Link</a>
                    <br/>
                    <a href={codeUrl} target="_blank">Github</a>
                </div>
            </div> */}
            {/* <br/> */}
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="experience-card-img" src={imgUrl} alt="Avatar"/>
                        <p className="flip-card-header">{role}<br/>- {company}<br/>{duration}</p>
                        {/* <p>{role}</p> */}
                    </div>
                    <div className="flip-card-back">
                        {/* <p>{workDescription}</p> */}
                        {/* <tbody>
                            {workDescription.map(object, i => {
                                <li obj={object} key={i}></li>;
                            })}
                        </tbody> */}
                        {/* {
                            // workDescription.each((work) => {
                            //     return (
                            //         <li>{work}</li>
                            //     )
                            // })
                            () => {
                                for(let i=1;i<=workDescription.length;i++){
                                     <li>{workDescription[i]}</li>
                                }
                            }
                        } */}
                        <p className="flip-card-header">{role}<br/>- <a href={link} target="_blank" rel="noreferrer">{company}</a><br/>{duration}</p>
                        {
                            workDescription.map((work, index) => {
                                return (
                                    <li className="experience-card-description">{work}</li>
                                )
                            })
                        }
                        {
                            urls.map((url, index) => {
                                return (
                                    <span><a href={url} target="_blank" rel="noreferrer">Link{index}</a> </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <br/>
        </Col>
    )
}