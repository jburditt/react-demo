import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Feedback from 'react-bootstrap/Feedback';

export default function Textbox({ label, controlName, required }: any) {
  return (
    <>
      <Form.Group className="mb-3" >
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control type="text" required />
        <Feedback type="invalid">
          Address Line 1 is required.
        </Feedback>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" as={Col} md="4" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" required />
        <Feedback type="invalid">
          City is required.
        </Feedback>
      </Form.Group>

      <Form.Group className="mb-3" as={Col} md="4" >
        <Form.Label>Province</Form.Label>
        <Form.Control type="text" required />
        <Feedback type="invalid">
          Province is required.
        </Feedback>
      </Form.Group>

      <Form.Group className="mb-3" as={Col} md="4" >
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type="text" required />
        <Feedback type="invalid">
          Postal Code is required.
        </Feedback>
      </Form.Group>
    </>
  );
}