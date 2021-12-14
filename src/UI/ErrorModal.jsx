import React from 'react'
// import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
    return (
        <>
        <div className="backdrop" onClick={props.onCloseErrorMsg}/>
        {/* make a dark full screen backdrop here. with high z-index to cover the other component*/}
        <Card>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
            <Button onClick={props.onCloseErrorMsg}>Okay</Button>
            </footer>
        </Card>
        </>
    )
}

export default ErrorModal

// you can put this in add user
// import ErrorModal from './ErrorModal'
{/* <ErrorModal title="An Error occured!" message="Something went wrong!" /> */}
// 