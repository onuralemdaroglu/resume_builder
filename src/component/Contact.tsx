import { ChangeEvent, useContext } from "react";
import { AppContext } from '../App';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';


const Contact = () => {
    const contextData = useContext(AppContext);
    
    //const [lastName, setLastName] = useState('');
    //const [email, setEmail] = useState();

    const HandleName = (e: ChangeEvent<HTMLInputElement>) => {
        contextData.setName(e.target.value);
    }

    return (
        
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Contact Information</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <FormGroup className='mb-3' controlId='name'>
                            <FormLabel>Name</FormLabel>
                            <FormControl type='text' value={contextData.name} onChange={HandleName} placeholder='Your Name'></FormControl>
                        </FormGroup>
                
                        <FormGroup className='mb-3' controlId='lastname'>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl type='text' placeholder='Your Last Name'></FormControl>
                        </FormGroup>
                    
                        <FormGroup className='mb-3' controlId='email'>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type='email' placeholder='someone@someone.com'></FormControl>
                        </FormGroup>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}


export default Contact;
