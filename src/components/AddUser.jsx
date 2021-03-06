import React, { useState, useRef } from 'react'
import styled from 'styled-components'
// import ErrorModal from '../UI/ErrorModal'

const Container = styled.div`
width: 60%;
background-color: white;
border-radius: 10px;
display: flex;
margin-bottom: 40px;
`

const Form = styled.form`
width: 90%;
margin: 30px;
display: flex;
flex-direction: column;
`

const Label = styled.label`
font-size: 20px;
font-weight: 600;
margin-bottom: 10px;
`

const Input = styled.input`
width: 100%;
height: 35px;
margin-bottom: 10px;
font-size: 18px;
`

const ButtonContainer = styled.div`
display: flex;
`

const Button = styled.button`
padding: 10px;
border: none;
color: white;
background-color: purple;
font-size: 20px;
margin-top: 10px;
width: 20%;
margin-right: 30px;
border-radius: 10px;
`

const AddUser = ({onAddedData, onCloseTheForm}) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [addName, setAddName] = useState("")
    const [addAge, setAddAge] = useState("")
    // const [error, setError] = useState()

    const addNameHandler = (ev) => {
        setAddName(ev.target.value)
    }

    const addAgeHandler = (ev) => {
        setAddAge(ev.target.value)
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        if(addName.trim().length === 0 || addAge.trim().length === 0) {
            // setError({
            //     title: 'Invalid input',
            //     message: 'Please enter a valid name and age (non-empty values).'
            // })
            return;
        }

        if(+addAge < 1){
            // setError({
            //     title: 'Invalid age',
            //     message: 'Please enter a valid age (> 0).'
            // })
            return;
        }

        const addedData = {
            name: addName,
            age: addAge,
            id: Math.floor(Math.random() * 1000)
        }

        onAddedData(addedData);
        setAddName("")
        setAddAge("")
        onCloseTheForm(ev);

    }

    const closeForm = (ev) => {
        onCloseTheForm(ev);
    }

    // const errorHandler = {
    //     setError(null);
    // }

    return (
        <Container>
            {/* {error && <ErrorModal 
            title={error.title} 
            message={error.message} 
            onCloseErrorMsg={errorHandler}
            />} */}

            <Form onSubmit={submitHandler}>
                <Label htmlFor="username">Username</Label>
                {/* <Input id="username" required type="text" onChange={addNameHandler} value={addName}/> */}
                <Input 
                id="username" 
                required type="text" 
                onChange={addNameHandler} 
                value={addName}
                ref={nameInputRef}
                />
                <Label htmlFor="age">Age(Years)</Label>
                {/* <Input id="age" required type="number" min="1" max="99" onChange={addAgeHandler} value={addAge}/> */}
                <Input id="age" 
                required type="number" 
                min="1" max="99" 
                onChange={addAgeHandler} 
                value={addAge}
                ref={ageInputRef}
                />
                <ButtonContainer>
                <Button type="submit">Add User</Button>
                <Button onClick={closeForm}>Cancel</Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
}

export default AddUser
