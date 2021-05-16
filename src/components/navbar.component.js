import React from "react"

// components
import {Navbar,Button,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

// assets
import logo from "../assets/Appointy-Logo1.svg"

// stylesheet
import "../assets/scss/navbar.scss"
  
export default function NavBar(props){
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