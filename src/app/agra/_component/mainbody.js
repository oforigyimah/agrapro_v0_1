import React from 'react';

function Mainbody({ children,className }) {
    return (
        <div className={`max-w-screen-2xl  mx-auto ${className}`}>{children}</div>
    );
}

export default Mainbody;