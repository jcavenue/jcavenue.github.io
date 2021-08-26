import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
					<MDBNavbarBrand tag="span" className=' mb-0 h1'>JCDEVS</MDBNavbarBrand>
					<MDBNavbarToggler
						type='button'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setShowNav(!showNav)}f
					>
						<MDBIcon icon={showNav === false ? 'bars': "angle-up"} fas />
					</MDBNavbarToggler>
					<MDBCollapse navbar show={showNav}>
						<MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
							<MDBNavbarItem>
								<MDBNavbarLink active={false} tag={NavLink} exact to='/' ><MDBIcon fas icon="home" /> Home</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink active={false} tag={NavLink} exact to='/Project'><MDBIcon fas icon="award" /> Project</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink active={false} tag={NavLink} exact to='/About'><MDBIcon fas icon="user-alt" /> About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink active={false} tag={NavLink} exact to='/Contact'><MDBIcon fas icon="address-book" /> Contact</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</header>
  );
}