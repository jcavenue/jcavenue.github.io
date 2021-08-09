import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar color="light" className="p-4"light expand="md">
        <NavbarBrand href="/">JCDEVS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
		</div>
	)
}

export default Header;