import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Feedback from 'react-bootstrap/Feedback';

export default function Textbox({ label, controlName, required }: any) {
  return (
    <Form.Group as={Col} md="4">
      <Form.Label>
        { label }
        <Form.Control type="text" name={ controlName } required={ required } />
        <Feedback type="invalid">
          { label } is required.
        </Feedback>
      </Form.Label>
    </Form.Group>
  );
}