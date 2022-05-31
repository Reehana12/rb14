import React from 'react';

function Second(props) {
    return (
        <div className='mybox bluish'>
            <h3>Second Component</h3>
            <h1>{props.myname}</h1>
        </div>
    );
}

export default Second;