import React from 'react';
//import { Form } from 'react-bootstrap';
//import { FormLabel } from 'react-bootstrap';
//import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Feedback from 'react-bootstrap/Feedback';

export default function Textbox({ label, controlName, required }: any) {
  console.log("required", required);
  return (
    <>
      <Form.Label htmlFor="inputPassword5">{ label }</Form.Label>
      <Form.Control type="text" id="inputPassword5" required={ required } aria-describedby="passwordHelpBlock" />
      <Feedback type="invalid">
        { label } is required.
      </Feedback>
    </>
  );
}