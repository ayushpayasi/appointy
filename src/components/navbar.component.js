import React ,{useState} from "react"
import {Collapse,Navbar,NavbarToggler,Button,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

// assets import
import logo from "../assets/Appointy-Logo1.svg"

// scss import
import "../assets/scss/navbar.scss"
  
export default function NavBar(props){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={logo} alt="logo"/></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Customers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Enterprise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Login</NavLink>
              </NavItem>
              <Button className="gradient-button">
                Sign Up
              </Button>
            </Nav>
        </Navbar>
      </div>
    );
  }