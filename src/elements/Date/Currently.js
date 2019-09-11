import React from 'react';
import { Alert } from 'reactstrap';

function Current (props) {
    return (
        <div className='current'>
            <Alert color='info'>{props.date}</Alert>
        </div>
    )
}

export default Current;