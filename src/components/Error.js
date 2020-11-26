import React from 'react';

const Error = ({ message }) => ( 
    <div className="alert alert-primary text-center my-5">
        <p><img src="assets/img/error.png" alt="Logo Error" /> {message}</p>
    </div>
);
 
export default Error;
