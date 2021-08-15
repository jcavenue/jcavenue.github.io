import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
	MDBIcon
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
		<header>
			<MDBNavbar expand='md' light bgColor='light' className="p-3" >
				<MDBContainer fluid>
					<MDBNavbarBrand tag="span" className='mb-0 h1'>JCDEVS</MDBNavbarBrand>
					<MDBNavbarToggler
						type='button'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setShowNav(!showNav)}
					>
						<MDBIcon icon='bars' fas />
					</MDBNavbarToggler>
					<MDBCollapse navbar show={showNav}>
						<MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/' >Home</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/Project'>Project</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/About'>About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/Contact'>Contact</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
			
		</header>
  );
}