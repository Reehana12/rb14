import React from 'react';
import UserContext from './UserContext';
function Xyz(props) {
    const user = React.useContext(UserContext)
    return (
        <div className='mybox reddish'>
            <h3>Xyz Component</h3>
            <h1>{user}</h1>
        </div>
    );
}

export default Xyz;