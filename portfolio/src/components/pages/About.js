import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'






import clickgame from "../images/click-game.png"
import googlebooks from "../images/google-books.png"
import barbershop from "../images/the-barbershop.png"
import googlemap from "../images/google-map.png"

import "./style.css";







const About = (props) => (



  
  // <ResponsiveEmbed aspect="a16by9">

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
    <Card.Title>React Click Game</Card.Title>
    <Card.Text>
      A card game that keeps track of which character is clicked. The goal of the game is to click each character once.
    </Card.Text>
    
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://rfranci52.github.io/clickgame/" >React Character Shuffle</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/clickgame" >React Character Shuffle Code</Button>  </Card.Body>
</Card>
</Col>





<Col>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={googlebooks} />               

  <Card.Body>
    <Card.Title>React Google Book search</Card.Title>
    <Card.Text>
      This app takes input from the user and sends it the Google Books API , returns the top result and saves it to MongoDB
    </Card.Text>
   
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://salty-everglades-96653.herokuapp.com/" >React Google Books Search </Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/react-google-books" >React Google Books Search Code</Button> </Card.Body>
</Card>
</Col>
</Row>

<Row>
<Col>

       
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={barbershop} />               

  <Card.Body>
    <Card.Title>The BarberShop Group Project</Card.Title>
    <Card.Text>
      In this app, Alongside a team of 3 other individuals, we drafted an idea for a useful app and created That app within the allotted timespan of 2 weeks.
    </Card.Text>
   
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://glacial-refuge-27656.herokuapp.com/" >The Barbershop (group project)</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/makicoding/The-Barbershop" >The Barbershop (group project) Code</Button> </Card.Body>
</Card>
          
</Col>
<Col>

       
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={googlemap} />               

  <Card.Body>
    <Card.Title>React Google Maps Yelp Healthy Store Finder.</Card.Title>
    <Card.Text>
     In this app, I created a react based Google Maps display that takes asks the user to input their location and displays healthy stores generated from Yelp Fusion Api.
    </Card.Text>
   
    <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://rfranci52.github.io/react-google-maps/" >Google Maps Healthy Stores</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/react-google-maps" >Google Maps Healthy Stores Code</Button> </Card.Body>
</Card>
          
</Col>
</Row>

</Container>  

            
  
            </div>
            // </ResponsiveEmbed>


            
        
        
        
);

export default About;
