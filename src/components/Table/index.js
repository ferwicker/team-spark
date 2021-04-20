import React from 'react';
import "./style.css";
import TableRow from '../TableRow'

function Table(props){
    return (
        <div className='table-wrapper'>
        <table className='table table-borderless'>
            <thead className='border-bottom'>
                <tr className='align-middle'>
                <th scope="col"><button value='first' onClick={props.handleSort} className='btn-sort'>First Name <i className="fas fa-sort-down" value='first'></i></button></th>
                <th scope="col"><button value='last' onClick={props.handleSort} className='btn-sort'>Last Name <i className="fas fa-sort-down"></i></button></th>
                <th scope="col">Mobile</th>
                <th scope="col">
                    <select className="btn-sort" aria-label="Select Search by">
                        <option defaultValue>Location</option>
                        <option value="New South Wales">NSW</option>
                        <option value="Queensland">QLD</option>
                        <option value="Victoria">VIC</option>
                        <option value="Western Australia">WA</option>
                        <option value="Northern Territory">NT</option>
                        <option value="Australian Capital Territory">ACT</option>
                    </select>
                </th>
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