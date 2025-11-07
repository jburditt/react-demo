'use client'

import Textbox from "@/app/components/textbox";
import { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";

export default function PageComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    console.log("valid", form.checkValidity());
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

          <Textbox label="First Name2" controlName="firstName" required></Textbox>

          {/* <fs-datepicker [datePickerFormControl]="$any(searchForm.get('date'))"></fs-datepicker>

          <fs-address [addressForm]="$any(searchForm.get('addressForm'))"></fs-address> */}

          <button type="submit" color="primary">
            Submit
          </button>

        </Form>
      </fieldset>
    </>
  )
}
