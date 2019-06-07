import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';








class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        {/* <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        /> */}
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand    currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}  onClick={() => this.handlePageChange("Home")}
          className={this.currentPage === "Home" ? "nav-link active" : "nav-link"}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link
        currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}  onClick={() => this.handlePageChange("About")}
          className={this.currentPage === "About" ? "nav-link active" : "nav-link"}>Portfolio</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider />
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


</div>

        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
