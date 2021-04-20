import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import helpImage from '../assets/teamspark-help.png';

function Help () {
    return (
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size='md-6'>
                    <h1>Need some help?</h1>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Get started with <strong>TeamSpark</strong> <i className="fas fa-bolt"></i> <i className="fas fa-chevron-down"></i>
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Welcome to TeamSpark <i className="fas fa-bolt"></i>!</strong> With this new web app you can easily manage a large team of 
                                employees working remotely and view their locations and contact details easily! It is perfect for companies with 'work from home' team 
                                members who need to be able to contact them often. You will be able to search for specific employees or filter them by location for an
                                easier searching experience. Let's get started!
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I filter my employee list? <i className="fas fa-chevron-down"></i>
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>To filter and search from your employee list</strong> you can use the search bar at the top (please note you will need to
                                select a search parameter to search), you can also select all employees by state or sort them by first or last name. To view the whole 
                                list of employees again, click on the 'Clear filters' button. 
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do I view an employee's full details? <i className="fas fa-chevron-down"></i>
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>To view a employee's details card</strong> click on the view profile button on the right. The selected employee's 
                                details will appear in the sticky card on the right of the screen. This card disappears when there are no employees to show on the list.
                                To reset this, click on the 'Clear filters' button and the whole list will display again.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can't find what you are after? <i className="fas fa-chevron-down"></i>
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>If you need some more assistance or have any questions</strong> please get in touch with Fer Wicker via email 
                                at <a href='mailto:fer.wicker@gmail.com' rel='noreferrer' target='_blank'>fer.wicker@gmail.com</a> or 
                                via <a href='https://github.com/ferwicker' rel='noreferrer' target='_blank'>my Github profile</a>.
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col size='md-6'>
                    <img className='about-image' src={helpImage} alt='teamwork'></img>
                </Col>
            </Row>
        </Container>
    );
}
export default Help;