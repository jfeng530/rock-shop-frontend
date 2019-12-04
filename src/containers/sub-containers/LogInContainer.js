import React from 'react';
import LogIn from '../../components/LogIn'

const LogInContainer = (props) => {
    return (
        <>
           <LogIn setToken={props.setToken} /> 
        </>
    );
}

export default LogInContainer;
