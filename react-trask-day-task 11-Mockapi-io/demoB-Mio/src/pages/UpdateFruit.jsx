import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

const UpdateFruit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const  nameRef = useRef(null);
  const dataOfBirthRef = useRef(null);
  const biographyRef = useRef(null);
  const ISBNnumberRef = useRef( null);
  
  const publicationdateRef = useRef(null);
  const imageLinkRef = useRef(null);

  useEffect(() => {
    axios.get(`https://6538d8e2a543859d1bb20b38.mockapi.io/task/${id}`).then((response) => {
      const data = response.data;
      titleRef.current.value = data.title;
       nameRef.current.value = data.author.name;
       dataOfBirthRef.current.value = data.author.dataOfBirth;
       biographyRef.current.value = data.author. biography;

       ISBNnumberRef.current.value = data.ISBNnumber;
      
      publicationdateRef.current.value = data.publicationdate;
      imageLinkRef.current.value = data.imageLink;
    });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      title: "",
      name: "",
      dataOfBirth: "",
      biography: "",
      ISBNnumber: "",
      publicationdate: "",
      imageLink:"",
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Required";
      } else if (values.title.length > 25) {
        errors.title = "Must be 25 characters or less";
      }

      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length > 25) {
        errors.name = "Must be 25 characters or less";
      }

      if (!values.dataOfBirth) {
        errors.dataOfBirth = "Required";
      }   else if (values.dataOfBirth.length > 35) {
        errors.dataOfBirth = "Must be 35 characters or less";
      }

      if (!values.biography) {
        errors.biography = "Required";
      } else if (values.biography.length > 2500) {
        errors.biography = "Must be 2500 characters or less";
      }

      if (!values.ISBNnumber) {
        errors.ISBNnumber = "Required";
      } else if (values.ISBNnumber.length > 25) {
        errors.ISBNnumber = "Must be 25 characters or less";
      }

      if (!values. publicationdate) {
        errors. publicationdate = "Required";
      } else if (values. publicationdate.length > 25) {
        errors. publicationdate = "Must be 25 characters or less";
      }

      if (!values.imageLink) {
        errors.imageLink = "Required";
      } 
      return errors;
    },
    onSubmit: (values) => {
      const payload = {
        title:titleRef.current.value,
        
        author: {
          name: nameRef.current.value,
          dataOfBirth:dataOfBirthRef.current.value,
          biography: biographyRef.current.value,
                 },
        ISBNnumber: ISBNnumberRef.current.value,
        publicationdate: publicationdateRef.current.value,
        imageLink: imageLinkRef.current.value,
      };

      axios.put(`https://6538d8e2a543859d1bb20b38.mockapi.io/task/${id}`, payload).then(( ) => {
        navigate("/");
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formtitle">
        <Form.Label> Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          ref={titleRef}
          onChange={formik.handleChange}
          
        />
        {formik.errors.title && <div  className="error-message">{formik.errors.title}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formname">
        <Form.Label>Author name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          ref={nameRef}
          onChange={formik.handleChange}
          
        />
        {formik.errors.name && <div  className="error-message">{formik.errors.name}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formdataOfBirth">
        <Form.Label>dataOfBirth</Form.Label>
        <Form.Control
          type="text"
          name="dataOfBirth"
          ref={dataOfBirthRef}
          onChange={formik.handleChange}
          value={formik.values.dataOfBirth} 
        />
        {formik.errors.dataOfBirth && <div  className="error-message">{formik.errors.dataOfBirth}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formbiography">
        <Form.Label>biography</Form.Label>
        <Form.Control
  type="text"
  name="biography"
  ref={biographyRef}
  onChange={formik.handleChange}
/>
       
       
        {formik.errors.biography && <div  className="error-message">{formik.errors.biography}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formISBNnumber">
        <Form.Label>ISBNnumber</Form.Label>
        <Form.Control
          type="text"
          name="ISBNnumber"
          ref={ISBNnumberRef}
          onChange={formik.handleChange}
       
        />
        {formik.errors.ISBNnumber && <div  className="error-message">{formik.errors.ISBNnumber}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formpublicationdate">
        <Form.Label>publicationdate</Form.Label>
        <Form.Control
          type="text"
          name="publicationdate"
          ref={publicationdateRef}
          onChange={formik.handleChange}
          
          
        />
        {formik.errors.publicationdate && <div  className="error-message">{formik.errors.publicationdate}</div>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formimageLink">
          <Form.Label>imageLink</Form.Label>
          <Form.Control
          type="text"
          name="imageLink"
          ref={imageLinkRef}
          onChange={formik.handleChange}
         
        />
          {formik.errors.imageLink && <div  className="error-message">{formik.errors.imageLink}</div>}
        </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateFruit;
