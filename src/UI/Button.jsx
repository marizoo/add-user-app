import React from 'react'

const Button = (props) => {
    return (
        <Button
        className={classes.button}
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
