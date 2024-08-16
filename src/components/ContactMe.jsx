import React from 'react'
import contact from '../assets/contact.png'
import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const [show, setShow] = useState(false);
  const form = useRef();  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bjw9rlz', 'template_46ie0c9', form.current, {
        publicKey: 'N8APIx0oM3jjL6xvN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Button variant="btn btn-outline-light" onClick={handleShow}>
      <img src={contact} alt='contact' width={15}/>
      &nbsp; Contact Me
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-dark text-white'>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
              <Modal.Body className='bg-dark text-white'>
                  <Form ref={form} onSubmit={sendEmail}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" name='from_name' />
                          <Form.Text className=" text-white">
                              I'll never share your name and details with anyone else.
                          </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Email" name='from_email' />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicMessage">
                          <Form.Label>Your Message</Form.Label>
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a message here."
                              style={{ height: '100px' }}
                              name='message'
                            />
                      </Form.Group>
                      <Button variant="success" type="submit">
                          Submit
                      </Button>
                  </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant='light'  className='btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactMe;

