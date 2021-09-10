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
				<div className="gray">
					<MDBContainer className=' px-lg-5 '>
						<MDBRow>
							<MDBCol lg="5" xs="12" className="p-0 pt-5 text-lg-start text-center">
								<MDBTypography variant='h1' className="fw-bold text-dark text-center text-lg-start" style={{fontSize: '50px'}}>JCAVENUE</MDBTypography>
								<p className="fst-italic fs-5 mb-4">Personal Web Portfolio</p>
								<p className="fs-3 mb-3">
									Building and Creating <br/>
									User-friendly Website
								</p>

								<p>Want to know more about me?</p>
						
								<p>
									<Link to="/About" alt="Button">
										<MDBBtn color='success' className="text-md" >Visit About Page</MDBBtn>
									</Link>
								</p>
							</MDBCol>
							<MDBCol lg="7" xs="12" className='p-0'>
								<img src={HomeBG} style={{height:500}} className='img-fluid' alt='bg_graphics' />
							</MDBCol> 
						</MDBRow>
					</MDBContainer>
				</div>
				
			</>
			
	)
}

export default withRouter(Home);