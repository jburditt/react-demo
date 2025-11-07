import styles from "./page.module.css";
import Textbox from "./components/textbox";
import Header from "./components/header";
import { Button, Form } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      Welcome to "React Bootstrap Demo", a demo Angular application to showcase the use of
      various React libraries and components, including:

      <ul>
        <li>React Bootstrap</li>
        <li>OAuth authentication -&gt; Auth guard, Azure AD</li>
        <li>Dependency Injection -&gt; Logging service, Toast service</li>
        <li>Datepicker</li>
        <li>NgRx Store</li>
        <li>OData query -&gt; Query database using OData .NET EF controllers</li>
        <li>Menu -&gt; Routing</li>
        <li>SurveyJS -&gt; Automate creating form from model, and loading form from database</li>
        <li>OpenAPI generate -&gt; Generate Angular API services from OpenAPI spec</li>
      </ul>
    </>
  );
}
