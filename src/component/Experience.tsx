import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const Experience = () => {
    return (
            
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Work Experience</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <FormGroup className='mb-3' controlId='firstname'>
                                <FormLabel>Company</FormLabel>
                                <FormControl type='text' placeholder='Company Name'></FormControl>
                                </FormGroup>
                                
                                <FormGroup className='mb-3' controlId='lastname'>
                                <FormLabel>Position</FormLabel>
                                <FormControl type='text' placeholder='Position'></FormControl>
                                </FormGroup>
                                
                                <FormGroup className='mb-3' controlId='location'>
                                <FormLabel>Location</FormLabel>
                                <FormControl type='text' placeholder='Location'></FormControl>
                                </FormGroup>
                                
                                <FormGroup className='mb-3' controlId='date'>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl type='text' placeholder='2009 - Present'></FormControl>
                                </FormGroup>

                                <FormGroup className='mb-3' controlId='responsibilities'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Responsibilities</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                                <br/>
                                <Form.Control as="textarea" rows={2} />
                                <br/>
                                <Form.Control as="textarea" rows={2} />
                                <br/>
                                <div className="d-grid gap-2">
                                    <Button variant="primary">
                                    Add Responsibility
                                    </Button>
                                    <Button variant="danger">
                                    Delete Responsibilities
                                    </Button>
                                </div>
                                </Form.Group>
                                </FormGroup>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
    )
}

export default Experience;

    