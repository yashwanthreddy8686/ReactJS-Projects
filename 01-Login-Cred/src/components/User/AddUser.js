import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorSetHandler = (event) => {
    setError(null);
  };
  function AddUserHandler(event) {
    event.preventDefault();
    const enteredNameInput = nameInputRef.current.value;
    const enteredAgeInput = ageInputRef.current.value;

    if (enteredNameInput.trim().length === 0 || enteredAgeInput.trim().length === 0) {
    setError({
        title: "Invalid username",
        message: "Please enter a valid username",
      });
      return;
    }
    if (+enteredAgeInput < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age" });
      return;
    }
    props.onCreateUser(enteredNameInput, enteredAgeInput);
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorSetHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
