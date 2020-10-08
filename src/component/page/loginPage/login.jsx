import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col} from 'reactstrap';

import "./style.css"
function Loginpage() {

  return (
    <>
    <div className="pt-4"> 
    <h1>Login To Radhe Radhe Technology !</h1>
    </div>
    <Container>
      <Row>
        <Col xs="" sm="">
        <Form className="pt-4">
      <FormGroup>
        <Label for="email"><h3>Email</h3></Label>
        <Input type="email" name="email" id="" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Password"><h3>Password</h3></Label>
        <Input type="password" name="password" id="Password" placeholder="Enter Your Password" />
      </FormGroup>
      <Button className="btn btn-dark"> Submit</Button>
    </Form>
        </Col>
          </Row>
     </Container>
    
    </>
  )

}

export default Loginpage ;



