import React from 'react'
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onCloseErrorMsg}/>
};

const ModalOverlay = (props) => {
    return (
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
    )
}

{/* make a dark full screen backdrop here. with high z-index to cover the other component*/}
const ErrorModal = (props) => {
    return (
        <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onCloseErrorMsg={props.onCloseErrorMsg} />,
            document.getElementById('backdrop-root')
        )}
       {ReactDOM.createPortal(
           <ModalOverlay  
           title={props.title}
           message={props.message}
           onCloseErrorMsg={props.onCloseErrorMsg}
           />,
           document.getElementById('overlay-root')
       )}
        </React.Fragment>
    )
}

export default ErrorModal

// you can put this in add user
// import ErrorModal from './ErrorModal'
{/* <ErrorModal title="An Error occured!" message="Something went wrong!" /> */}
// 