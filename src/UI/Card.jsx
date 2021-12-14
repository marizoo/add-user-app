import React from 'react'
// if you were to use css module
// import classes from './Card.module.css';

const Card = (props) => {
    return (
        // <div className={`${classes.card} ${props.className}`} >
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card

// to use it
// import Card from '../UI/Card'
// <Card>  </Card>
