import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import teamImage from '../assets/team-illustration.png';
import './style.css';

function About () {
    return (
        <Container style={{ marginTop: 30 }}>
            <h1>About TeamSpark <i className="fas fa-bolt"></i></h1>
            <Row>
                <Col size='md-6'>
                    <p>
                    TeamSpark is an employee directory management app that helps organisations with a team 
                    spread accross multiple locations access their employees contact details easily. With TeamSpark 
                    you can search your employee database, filter them by location or search them by name or city in order 
                    to easily find the best person for the job. 
                    </p>
                    <p>
                    Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                    malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                    ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                    nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                    Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                    porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                    </p>
                </Col>
                <Col size='md-6'>
                    <img className='about-image' src={teamImage} alt='teamwork'></img>
                </Col>
            </Row>

        </Container>
    );
}
export default About;