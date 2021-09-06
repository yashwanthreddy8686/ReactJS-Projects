import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";

const AddUser = (props) => {
  function AddUserHandler(event) {
    event.preventDefault();
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
