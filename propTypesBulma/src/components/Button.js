import React from 'react';
import PT from 'prop-types'

const colorClasses = {
    red: 'is-danger',
    yellow: 'is-warning',
    green: 'is-success',
    default: 'is-primary'
};

const Button = (props) => {
    return (
        <button className={`button ${colorClasses[props.color]}`} onClick={props.onClick}>{props.children}</button>    
    )
};

Button.defaultProps = {
    color: 'default'
};

Button.propTypes = {
    children: PT.string.isRequired,
    onClick: PT.func,
    color: PT.string
};

export default Button;