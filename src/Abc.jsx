import React from 'react';
import Xyz from './Xyz';
function Abc(props) {
    return (
        <div className='mybox orangebase'  style={{width:'50%'}}>
            <h3>Abc Component</h3>
            <Xyz></Xyz>
        </div>
    );
}

export default Abc;