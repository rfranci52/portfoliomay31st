import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import clickgame from "../images/click-game.png"
import googlebooks from "../images/google-books.png"
import barbershop from "../images/the-barbershop.png"
import "./style.css";







const About = (props) => (



  
    
 <div class="w3-white w3-margin">
   
        <div class="w3-container w3-padding w3-black">
            <h4>Portfolio</h4>
        </div>
        <Container>
  <Row>
  <Col>
        
       
        
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={clickgame} />               

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://rfranci52.github.io/clickgame/" >React Character Shuffle</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/clickgame" >React Character Shuffle Code</Button>  </Card.Body>
</Card>
</Col>





<Col>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={googlebooks} />               

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="" >React Google Books Search (coming soon)</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/react-google-books" >React Google Books Search Code</Button> </Card.Body>
</Card>
</Col>
</Row>

<Row>
<Col>

       
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={barbershop} />               

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://glacial-refuge-27656.herokuapp.com/" >The Barbershop (group project)</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/makicoding/The-Barbershop" >The Barbershop (group project) Code</Button> </Card.Body>
</Card>
          
</Col>

</Row>

</Container>  
            
  
            </div>

            
        
        
        
);

export default About;
