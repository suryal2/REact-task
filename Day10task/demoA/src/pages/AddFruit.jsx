import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
 
function AddFruit() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const imageUrl = useRef("");
 
  const navigate = useNavigate();
 
  const addFruitHandler = () => {
    var payload = {
      name:name.current.value,
      username: username.current.value ? Number(username.current.value):0,
      email: email.current.value ? Number(email.current.value): 0 ,
      imageUrl: imageUrl.current.value,
    };
    axios.post("  http://localhost:4000/fruits", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formusername">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formemail">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="text" ref={imageUrl} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addFruitHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}
export default AddFruit;