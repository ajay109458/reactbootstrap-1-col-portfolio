import React from 'react';
import {Navbar, Nav, NavItem }  from 'react-bootstrap';

class NavigationBar extends React.Component {

	render() {
		return (
			<Navbar inverse collapseOnSelect fixedTop className="em-text">
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#" className="em-text">Gamma</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
				    <Nav>
				      <NavItem eventKey={1} href="#">Home</NavItem>
				      <NavItem eventKey={2} href="#">About</NavItem>
				      <NavItem eventKey={3} href="#">Contact</NavItem>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavigationBar;