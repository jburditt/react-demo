'use client';

import Textbox from "@/app/components/textbox";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, Row, Table } from "react-bootstrap";
import buildQuery from 'odata-query'

export default function Page() {
  const [users, setUsers] = useState(Array<any>);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log("formJson", formJson); 

    //console.log("searchForm", this.searchForm.value);
    const filter = { and: { FirstName: { contains: formJson.firstName }, LastName: { contains: formJson.lastName } } };
    const query = buildQuery({ filter });
    //useEffect(() => {
      fetch(`https://localhost:8080/api/User${query}`)
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setUsers(data);
          console.log("data", users);
        })
        .catch((err) => {
          console.error("fetch error", err);
        });
    //});
  };

  return (
    <>
      <h1>Search Users</h1>
      <p>An example of using OData to query the database</p>
      <br />

      <fieldset className="mb-5">
        <legend>Search</legend>
        <br />

        <Form onSubmit={ handleSubmit } noValidate>
          <Row className="mb-3">
            <Textbox label="Last Name" controlName="lastName" />
            <Textbox label="First Name" controlName="firstName" />
          </Row>
          <Button type="submit" variant="primary">Search</Button> 
        </Form>
      </fieldset>

      { (users && users.length > 0) &&
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <td>First Name</td>
            </th>
            <th>
              <td>Last Name</td>
            </th>
          </tr>
        </thead>
        <tbody>
          { users.map((user) => (
            <><tr>
              <td>{ user.firstName }</td>
              <td>{ user.lastName }</td>
            </tr></>  
          ))}
        </tbody>
      </Table>
      }
    </>
  );
}
