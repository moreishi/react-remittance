import React from 'react';

const Link = (props) => {
    return (
        <a className="nav-link" href="#">{props.label}</a>
    );
}

export default Link;