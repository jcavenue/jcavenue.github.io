import { withRouter, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { Helmet } from "react-helmet";
import HomeBG from '../Assets/img/HomeBg.svg'

const Home = () => {

	return (
			<>
				<Helmet>
					<title>jcavenue | Home</title>
				</Helmet>
				<MDBContainer className='pt-md-5 px-lg-5 '>
					<MDBRow>
						<MDBCol lg="5" xs="12" className="p-0 pt-5 pb-3 text-lg-start text-center">
							<MDBTypography variant='h1' className="fw-bold text-dark text-center text-lg-start" style={{fontSize: '50px'}}>JCAVENUE</MDBTypography>
							<p className="fst-italic fs-5 mb-4"> Personal Web Portfolio</p>
							<p className="fs-3 mb-3">
								Building and Creating <br/>
								User-friendly Website
							</p>

							<p>Want to know more about me?</p>
							
							<p>
								<Link to="/About">
									<MDBBtn className="bg-success">Visit About Page</MDBBtn>
								</Link>
								<a href="/resume/Fababeir_CV.pdf" alt="Download CV" className="mx-2" download="FababeirCV">
									<MDBBtn  color='dark'>
										DOWNLOAD MY CV
									</MDBBtn>
								</a>
							</p>
						</MDBCol>
						<MDBCol lg="7" xs="12" className='p-0'>
							<img src={HomeBG} className='img-fluid' alt='web development graphic' />
						</MDBCol> 
					</MDBRow>
				</MDBContainer>
			</>
			
	)
}

export default withRouter(Home);