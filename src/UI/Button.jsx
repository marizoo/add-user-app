import React from 'react'
// import classes from '../ButtonStyle.module.css'


// <Button
        // className={classes.button} />

const Button = (props) => {
    return (
        
        <Button
        type={props.type || 'button'}
        onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default Button

// to use it:
// import Button from '../UI/Button'
// <Button type="submit">Add User</Button>
