import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const Education = () => {
    return (

                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                    <Form>
                        <FormGroup className='mb-3' controlId='schoolname'>
                            <FormLabel>School</FormLabel>
                            <FormControl type='text' placeholder='School Name'></FormControl>
                        </FormGroup>

                        <FormGroup className='mb-3' controlId='degree'>
                            <FormLabel>Degree</FormLabel>
                            <FormControl type='text' placeholder='Degree'></FormControl>
                        </FormGroup>
                        
                        <FormGroup className='mb-3' controlId='year'>
                            <FormLabel>Graduate Year</FormLabel>
                            <FormControl type='text' placeholder='MM/YY'></FormControl>
                        </FormGroup>
                    </Form>
                    <div className="d-grid gap-2">
                            <Button variant="primary">
                            Add School
                            </Button>
                            <Button variant="danger">
                            Delete School
                            </Button>
                        </div>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
    )
}

export default Education;