import React from 'react';
import LogIn from '../../components/LogIn'

const LogInContainer = (props) => {
    return (
        <div>
           <LogIn setToken={props.setToken} /> 
        </div>
    );
}

export default LogInContainer;
