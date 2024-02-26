import { useContext } from 'react';
import { AppContext } from '../App';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function DisplayResume() {
  const contextData = useContext(AppContext);

  return (
    
    <Card className="text-center">
        <Card.Header>
           {contextData.name}
        </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default DisplayResume;