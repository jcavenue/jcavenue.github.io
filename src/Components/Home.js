import { withRouter, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import ads1 from '../Assets/img/ads1.png'

const Home = () => {

	return (
		<div className='pt-md-5 px-lg-5 bg-DFEEEA'>
			<MDBContainer>
				<MDBRow>
					<MDBCol lg="5" xs="12" className="p-0 pt-5 pb-3 text-lg-start text-center">
						<MDBTypography variant='h1' style={{fontSize: '60px'}}>Hey! I'm JC</MDBTypography>
						<p className="fst-italic fs-5 mb-4"> Front-end Developer</p>
						<p className="fs-3 mb-3">
							Building and Creating <br/>
							User-friendly Website
						</p>
						<p>Want to know more about me?</p>
						<p>
							<Link to="/About">
								<MDBBtn rounded color='success'>Click Here</MDBBtn>
							</Link>
						</p>
					</MDBCol>
					<MDBCol lg="7" sm="12" className='p-0'>
						<img src={ads1} className='img-fluid' alt='...' />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
    </div>
	)
}

export default withRouter(Home);