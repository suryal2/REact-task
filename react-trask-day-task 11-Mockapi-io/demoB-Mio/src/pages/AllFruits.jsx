import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";
 import './AllFruit.css'
function AllFruits() {
  const [allFruits, setAllFruits] = useState([]);
  const navigate = useNavigate();
 
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);
 
  useEffect(() => {
    axios.get("https://6538d8e2a543859d1bb20b38.mockapi.io/task").then((response) => {
      setAllFruits(response.data);
    });
  }, []);
 
  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
 
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };
 
  const confirmDeleteHandler = () => {
    axios
      .delete(`  https://6538d8e2a543859d1bb20b38.mockapi.io/task/${itemToDeleteId}`)
      .then((response) => {
        setAllFruits((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };
 
  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Row className="mt-2"  >
      <div className="nav-img">
      <img src="./img/How-to-make-a-brand-style-guide.png" alt="vinna" />
       </div>
       <div className="flex">
       <h3> books and author detials are update here ,click and store the information</h3>
        <Col md={{ span: 4, offset: 4 }}>
          <Button    id="batn"  className="btn-a" variant="outline-info" onClick={() => navigate("/add-fruit")}>
          Add content 
          </Button>
        </Col>
        </div> 
      </Row>
      <Row xs={1} md={3} className="g-2" id=" cards">
      {allFruits.map((item) => (
          <Col key={item.id}>
            <Card >
            <Card.Img
                variant="top"
                src={item.imageLink}
                style={{ height: 300 }}
              />
              <Card.Body id="cardbody" >
                <Card.Title>Title-{item.title}</Card.Title>
                <Card.Text>Author Name - {item.author.name}</Card.Text>
                <Card.Text>Author Data of Birth - {item.author.dataOfBirth}</Card.Text>
                <Card.Text>Author biography - {item.author.biography}</Card.Text>
                <Card.Text>ISBN number - {item.ISBNnumber}</Card.Text>
                <Card.Text>Publication Date - {item.publicationdate}</Card.Text>
                
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update-fruit/${item.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default AllFruits;