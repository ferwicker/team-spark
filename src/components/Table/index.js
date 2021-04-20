import React from 'react';
import "./style.css";
import TableRow from '../TableRow'

function Table(props){
    return (
        <div className='table-wrapper'>
        <table className='table table-borderless'>
            <thead className='border-bottom'>
                <tr className='align-middle'>
                <th scope="col">First Name</th>
                <th scope="col">Last Name <i className="fas fa-sort-down sort"></i></th>
                <th scope="col">Mobile</th>
                <th scope="col">Location <i className="fas fa-sort-down sort"></i></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <TableRow 
                users={props.users}
                handleViewClick={props.handleViewClick}/>
            </tbody>
        </table>
        </div>
    )
}

export default Table;