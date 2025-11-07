'use client'

import Textbox from "@/app/components/textbox";
import { FormEvent, useState } from "react";
import { Form, Row } from "react-bootstrap";

export default function PageComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <h1>Form</h1>

      <p>This page demonstrates datepicker, validation, and a nested address form.</p>

      <fieldset>
        <legend>Reactive Form</legend>
        <Form noValidate validated={ validated } method="post" onSubmit={ handleSubmit }>
          <Row className="mb-3">
            <Textbox label="First Name" controlName="firstName" required></Textbox>
            <Textbox label="Last Name" controlName="lastName" required></Textbox>

            {/* <fs-datepicker [datePickerFormControl]="$any(searchForm.get('date'))"></fs-datepicker>

            <fs-address [addressForm]="$any(searchForm.get('addressForm'))"></fs-address> */}

          </Row>

          <button type="submit" color="primary">
            Submit
          </button>
        </Form>
      </fieldset>
    </>
  )
}
