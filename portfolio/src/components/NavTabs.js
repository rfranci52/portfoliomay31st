import React from "react";

function NavTabs(props) {
  return (
    
    
    <div class="w3-top">
    <div class="w3-bar w3-red w3-card w3-left-align w3-large">
      <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"
        href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>

      <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a> 
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          about
        </a> 
        
        
        
        
        
             {/* <a href="" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Home Page 1</a>  */}
      <a href="portfolio_page.html"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Portfolio</a>
     <a href="contact_w3.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Contact</a> 
       <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a> 
    </div>

    <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
      
      
      
      
      {/* <a href="index.html" class="w3-bar-item w3-button w3-padding-large">Home</a> */}

      <a
          // href="#home"
          // onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>


      <a href="portfolio_page.html" class="w3-bar-item w3-button w3-padding-large">Portfolio</a>
    <a href="contact_w3.html" class="w3-bar-item w3-button w3-padding-large">Contact</a> 
      <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 4</a> 
    </div>
  </div>
  );
}


export default NavTabs;
