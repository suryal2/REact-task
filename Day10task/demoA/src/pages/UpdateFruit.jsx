import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 
function UpdateFruit() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  // const imageUrl = useRef("");
  const address = {
    street: useRef(""),
    city: useRef(""),
    zipcode:useRef(""),
  };

  const { id } = useParams();
 
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get(`http://localhost:4000/fruits/${id}`).then((response) => {
      name.current.value = response.data.name;
      username.current.value = response.data.username;
      email.current.value = response.data.email;
      address.street.current.value = response.data.address.street;
      address.city.current.value = response.data.address.city;
      address.zipcode.current.value = response.data.address.city;
    });
  }, [id]);
 
  const updateFruitHandler = () => {
    var payload = {
      name: name.current.value,
      username: username.current.value  ,
      email: email.current.value  ,
       
      address: {
        street: address.street.current.value,
        city: address.city.current.value,
        zipcode: address.zipcode.current.value,
      }
    };
 
    axios.put(`  http://localhost:4000/fruits/${id}`, payload).then((response) => {
        navigate("/");
    })
  };
 
  return (
    <>
      <legend>Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formname">
          <Form.Label>name</Form.Label>
          <Form.Control type="name" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formusername">
          <Form.Label>username</Form.Label>
          <Form.Control type="username" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formemail">
          <Form.Label>email</Form.Label>
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
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateFruit;