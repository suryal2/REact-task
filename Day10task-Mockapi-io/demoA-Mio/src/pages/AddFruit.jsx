import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddFruit() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const address = {
    street: useRef(""),
    city: useRef(""),
    zipcode:useRef(""),
  };

  const navigate = useNavigate();

  const addFruitHandler = () => {
    const payload = {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value ? email.current.value : "",
      address: {
        street: address.street.current.value,
        city: address.city.current.value,
        zipcode: address.zipcode.current.value,
      },
    };

    axios.post("https://6538d8e2a543859d1bb20b38.mockapi.io/task10", payload).then(() => {
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
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formemail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formaddressstreet">
          <Form.Label>Address Street</Form.Label>
          <Form.Control type="text" ref={address.street} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formaddresscity">
          <Form.Label>Address City</Form.Label>
          <Form.Control type="text" ref={address.city} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formaddresszipcode">
          <Form.Label>Address zipcode</Form.Label>
          <Form.Control type="text" ref={address.zipcode} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addFruitHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default AddFruit;
