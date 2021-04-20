import React from 'react';
import "./style.css";

function TableRow(props){

    return props.visible.map((user, index) => (
        <tr className='table-row' key={index}>
            <td className='align-middle border-bottom'>{user.name.first}</td>
            <td className='align-middle border-bottom'>{user.name.last}</td>
            <td className='align-middle border-bottom'>{user.cell}</td>
            <td className='align-middle border-bottom'>{user.location.city}</td>
            <td className='align-middle border-bottom'><button className='view-btn' value={index} onClick={props.handleViewClick}>View profile</button></td>
        </tr>
    )
        
    )
}

export default TableRow;