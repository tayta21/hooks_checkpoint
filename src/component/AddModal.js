import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import App from "../App";

const AddModal = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    rating: "",
    description: ""
  })
  const updateFormData = (event , props) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

          })
          ;
          
    const { title, img, rating, description} = formData;

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        +
      </Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>        
        </Modal.Header>
        <Modal.Body>
          <div>
          <form>
      <input
        value={title}
        onChange={e => updateFormData(e)}
        placeholder="title"
        type="text"
        name="title"
        required
      />
      <input
        value={img}
        onChange={e => updateFormData(e)}
        placeholder="img url"
        type="text"
        name="img"
        required
      />
      <input
        value={rating}
        onChange={e => updateFormData(e)}
        placeholder="rating / 10"
        type="text"
        name="rating"
        required
      />
      <input
        value={description}
        onChange={e => updateFormData(e)}
        placeholder="description"
        type="text"
        name="description"
        required
      />

      <Button type="submit">Submit</Button>
    </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
                          Close             
          </Button>
          {/* <Button variant="primary">
                          Add Movie             
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddModal;