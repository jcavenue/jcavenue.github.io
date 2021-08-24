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
								<MDBNavbarLink tag={Link} to='/' ><MDBIcon fas icon="home" /> Home</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/Project'><MDBIcon fas icon="award" /> Project</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/About'><MDBIcon fas icon="user-alt" /> About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink tag={Link} to='/Contact'><MDBIcon fas icon="address-book" /> Contact</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</header>
  );
}