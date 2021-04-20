import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function EmployeeCard (props){

    return (
    <div className=' d-flex flex-column justify-content-center align-items-center employee-card'>
        <img src={props.image} alt='Employee' className='employee-image'></img>
        <p className='employee-name'>{props.firstName} {props.lastName}</p>
        <p className='employee-location'>{props.city}</p>
        <p>{props.phone}</p>
        <p>{props.mobile}</p>
        <Link className='employee-email' to={`mailto:${props.email}`}>{props.email}</Link>

    </div>
    )
}

export default EmployeeCard;