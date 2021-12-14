import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
background-color: white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


const Ul = styled.ul`
width: 90%;
list-style: none;
display:flex
flex-direction: column;
padding: 0;
margin: 30px;

`

const Li = styled.li`
width: 100%;
height: 40px;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 10px;
display: flex;
align-items: center;
margin-bottom: 10px;
padding-left: 10px;
font-size: 18px;
font-weight: 700;
`


const ListUsers = ({datas}) => {
    return (
        <Container>
            <Wrapper>
                <Ul>
                   {datas.map( data => (
                       <Li key={data.id}>{data.name} ({data.age} years old)</Li>
                   ) )}
                </Ul>
            </Wrapper>
        </Container>
    )
}

export default ListUsers
