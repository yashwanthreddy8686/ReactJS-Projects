import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (username, age) => {
    setUsersList((prevUserState) => {
      return [...prevUserState, {id: Math.random().toString() ,username: username, age: age}];
    });
  }
  return (
    <>
      <AddUser onCreateUser={newUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
