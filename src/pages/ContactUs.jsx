import React, { useState } from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  Tabs,
  Tab
} from 'react-bootstrap';

export default function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='px-4 py-12 max-w-2xl mx-auto my-5 rounded'>
      <span className='text-[30px] w-full text-center my-5'>ContactUs</span>
      <Tabs
        defaultActiveKey="email"
        className="mb-3"
      >
        <Tab eventKey="phone" title="PHONE">
          <a href="#">+18005500005</a>
        </Tab>
        <Tab eventKey="email" title="E-MAIL">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>AREA OF INTEREST*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                </Form.Select>
                <Form.Control.Feedback type="invalid">Fill Content</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>TOPIC*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                </Form.Select>
                <Form.Control.Feedback type="invalid">Fill Content</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>MESSAGE*</Form.Label>
                <Form.Control as="textarea" rows={3}  required/>
                <Form.Control.Feedback type="invalid">
                  Fill Content
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>FIRST NAME*</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback>
                  Fill Content
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>LAST NAME*</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">
                  Fill Content
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom06">
                <Form.Label>E-MAIL* <span>(EXAMPLE@DOMAIN.COM)</span></Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback>
                  Fill Content
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom07">
                <Form.Label>LOCATION*</Form.Label>
                <Form.Select aria-label="Default select example" required>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Fill Content
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom08">
                <Form.Label>PHONE</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className='text-black hover:text-white'>Submit form</Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}
