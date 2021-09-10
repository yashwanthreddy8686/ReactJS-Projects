import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function usernameInputHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageInputHandler(event) {
    setEnteredAge(event.target.value);
  }

  const errorSetHandler = event =>{
    setError(null);
  }
  function AddUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: "Invalid username", message:"Please enter a valid username"})
      return;
    }
    if (+enteredAge < 1) {
      setError({title: "Invalid age", message:"Please enter a valid age"})
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
    props.onCreateUser(enteredUsername, enteredAge);
  }

  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorSetHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameInputHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            onChange={ageInputHandler}
            value={enteredAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
