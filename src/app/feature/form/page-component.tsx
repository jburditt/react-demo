'use client'

import Address from "@/app/components/address";
import Textbox from "@/app/components/textbox";
import { FormEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

export default function PageComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log("formJson", formJson);
    }
    setValidated(true);
  };

  return (
    <>
      <h1>Form</h1>

      <p>This page demonstrates datepicker, validation, and a nested address form.</p>

      <fieldset>
        <legend>Reactive Form</legend>
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
          <Row className="mb-3">
            <Textbox label="First Name" controlName="firstName" required></Textbox>
            <Textbox label="Last Name" controlName="lastName" required></Textbox>

            {/* <fs-datepicker [datePickerFormControl]="$any(searchForm.get('date'))"></fs-datepicker> */}

            <Address />

          </Row>

          <Button type="submit" variant="primary">Submit</Button>

        </Form>
      </fieldset>
    </>
  )
}
