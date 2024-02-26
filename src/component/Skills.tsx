import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const Skills = () => {
    return (
            
        <>

                {/*Education*/}
                <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Skills & Certificates</Accordion.Header>
                <Accordion.Body>
                <Form>
                    <FormGroup className='mb-3' controlId='language'>
                    <FormLabel>Languages</FormLabel>
                    <FormControl type='text' placeholder='JavaScript, React...'></FormControl>
                    </FormGroup>
                </Form>
                <div>
                        <Button variant='success' as="input" type="button" value="Add" />{' '}
                        <Button variant='danger' as="input" type="button" value="Delete" />{' '}
                    </div>
                    <br/>
                <Form>
                    <FormGroup className='mb-3' controlId='certificate'>
                    <FormLabel>Certificates</FormLabel>
                    <FormControl type='text' placeholder='Certificate...'></FormControl>
                    </FormGroup>
                </Form>
                    <div>
                        <Button variant='success' as="input" type="button" value="Add" />{' '}
                        <Button variant='danger' as="input" type="button" value="Delete" />{' '}
                    </div>
                </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                
        </> 
    )
}

export default Skills;