import React from "react";
import Button from 'react-bootstrap/Button';
import image from "../images/click-game.png"


const About = (props) => (
    
 <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-black">
            <h4>Portfolio</h4>
        </div>
        
       
        
        <div class="w3-col s6">
                <img class="img1" src={image}alt="error"width="200px"/>
                <a class="img1_click" href="hw 6_final/index.html" />
                    <img src="icon.gif" alt=""/>
                
                
           
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://rfranci52.github.io/clickgame/" >React Character Shuffle</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/clickgame" >React Character Shuffle Code</Button>

        {/* <a rel="noreferrer noopener" target="_blank" href="http://google.com">
              Go to recipe!
            </a> */}

        
        
                   
                {/* </a> */}



            </div>

            <div class="w3-col s6">
                <img class="img1" href=".../public/click-game" alt="error"width="200px"/>
                <a class="img1_click" href="hw 6_final/index.html" />
                    <img src="icon.gif" alt=""/>
                
                
           
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="" >React Google Books Search coming soon</Button>
        <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href="https://github.com/rfranci52/react-google-books" >React Google Books Search Code</Button>

        



            </div>
            
            </div>
            
        
        
        
);

export default About;
