import React, { useState } from "react";
import styled from "styled-components";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  width: 40%;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const DUMMY_DATA = [
  {
    id: "001",
    name: "Luck",
    age: "39",
  },
  {
    id: "002",
    name: "Joy",
    age: "37",
  },
];

function App() {
  const [showData, setShowData] = useState(DUMMY_DATA);
  const [showForm, setShowForm] = useState(false);

  const addDataToList = (addedData) => {
    setShowData((prevList) => {
      return [addedData, ...prevList];
    });
  };

  const closeTheForm = (ev) => {
    setShowForm(false);
  };

  return (
    <Container>
      <Wrapper>
        {!showForm && (
          <Button onClick={() => setShowForm(!showForm)}>Add User</Button>
        )}
        {showForm && (
          <AddUser onAddedData={addDataToList} onCloseTheForm={closeTheForm} />
        )}

        <ListUsers datas={showData} />
      </Wrapper>
    </Container>
  );
}

export default App;
