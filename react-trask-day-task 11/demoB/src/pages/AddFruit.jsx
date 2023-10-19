
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import './AddFruit.css'

const AddFruit = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      name: "", // Initialize username with an empty string
      email: "",

      
      dataOfBirth: "",
      biography:  "",
      ISBNnumber:  "",
      publicationdate:"",
        imageLink:"",
       
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Required";
      } else if (values.title.length > 25) {
        errors.title = 'Must be 25 characters or less';
      }
    
      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length > 25) {
        errors.name = 'Must be 25 characters or less';
      }
    
      if (!values.dataOfBirth) {
        errors.dataOfBirth = "Required";
      }   else if (values.dataOfBirth.length > 35) {
        errors.dataOfBirth = 'Must be 35 characters or less';
      } 

      if (!values.biography) {
        errors.biography = "Required";
      } else if (values.biography.length > 2500) {
        errors.biography = 'Must be 2500 characters or less';
      }


      
  if (!values.ISBNnumber) {
    errors.ISBNnumber = "Required";
  } else if (values.ISBNnumber.length > 25) {
    errors.ISBNnumber = 'Must be 25 characters or less';
  }

  if (!values.publicationdate) {
    errors.publicationdate = "Required";
  } else if (values.publicationdate.length > 15) {
    errors.publicationdate = 'Must be 15 characters or less';
  }

  
  if (!values.imageLink) {
    errors.imageLink = "Required";
  }  
    
    
    
      return errors;
    },
    onSubmit: (values) => {
      const payload = {
        title: values.title,
        author:{
          name:values.name,
          dataOfBirth:values.dataOfBirth,
          biography:values.biography
        },
        ISBNnumber:values.ISBNnumber,
        publicationdate:values.publicationdate,


 
        imageLink:values.imageLink,
      };

      axios.post("http://localhost:4001/fruits", payload).then(() => {
        navigate("/");
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formtitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && <div className="error-message">{formik.errors.title}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formname">
        <Form.Label>Author name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <div className="error-message">{formik.errors.name}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formdataOfBirth">
        <Form.Label>dataOfBirth</Form.Label>
        <Form.Control
          type="text"
          name="dataOfBirth"
          onChange={formik.handleChange}
          value={formik.values.dataOfBirth}
        />
                {formik.errors.dataOfBirth && <div className="error-message">{formik.errors.dataOfBirth}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formbiography">
        <Form.Label>biography</Form.Label>
        <Form.Control
          type="text"
          name="biography"
          onChange={formik.handleChange}
          value={formik.values.biography}
        />
         {formik.errors.biography && <div className="error-message">{formik.errors.biography}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formaddresscity">
        <Form.Label>ISBNnumber</Form.Label>
        <Form.Control
          type="text"
          name="ISBNnumber"
          onChange={formik.handleChange}
          value={formik.values.ISBNnumber}
        />
          {formik.errors.ISBNnumber && <div className="error-message">{formik.errors.ISBNnumber}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formpublicationdate">
        <Form.Label>publicationdate</Form.Label>
        <Form.Control
          type="text"
          name="publicationdate"
          onChange={formik.handleChange}
          value={formik.values.publicationdate}
        />
          {formik.errors.publicationdate && <div className="error-message">{formik.errors.publicationdate}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formimageLink">
          <Form.Label>imageLink</Form.Label>
          <Form.Control
          type="text"
          name="imageLink"
          onChange={formik.handleChange}
          value={formik.values.imageLink}
          />
           {formik.errors.imageLink && <div className="error-message">{formik.errors.imageLink}</div>}
        </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddFruit;