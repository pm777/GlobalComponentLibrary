import React from "react";
import  {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
/*
Header is created using Navbar of react-bootstrap
https://react-bootstrap.github.io/components/navbar/
*/

/*
To push the options to center, use margin:auto
to make header black change bg in .bg-dark
*/
function Header() {
  return (
      <div>
          
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="dark">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
           
  </div>
  );
}
export default Header;