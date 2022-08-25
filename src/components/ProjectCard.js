import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, liveUrl, codeUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt="project-mg-icon"/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <a href={liveUrl} target="_blank" rel="noreferrer">Live Link</a>
                    <br/>
                    <a href={codeUrl} target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </Col>
    )
}