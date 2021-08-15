import { withRouter, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import ads from '../Assets/img/ads.png'

const Home = () => {

	return (
		<div className='p-4 bg-DFEEEA'>
			<MDBContainer>
				<MDBRow>
					<MDBCol lg="5" xs="12" className="p-5 text-lg-start text-center">
						<MDBTypography variant='h1' className="display-5">Hey! I'm JC</MDBTypography>
						<p className="fst-italic fs-5 mb-4"> Front-end Developer</p>
						<p className="fs-4 mb-3">
							Building and Creating <br/>
							User-friendly Website
						</p>
						<p>
							Want to know more about me?
						</p>
						<p>
							<Link to="/Project">
								<MDBBtn rounded color='success'>Click Here</MDBBtn>
							</Link>
						</p>
					</MDBCol>
					<MDBCol lg="7" xs="12" className='p-5'>
						<img src={ads} className='img-fluid' alt='...' />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
    </div>
		
	)
}

export default withRouter(Home);