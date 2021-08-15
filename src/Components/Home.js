import { withRouter, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';

const Home = () => {

	return (
		<div className='p-5 bg-DDDDDD ' style={{ height: 500,}}>
			<MDBContainer>
				<MDBRow>
					<MDBCol lg="6" xs="12" className="p-5 text-md-start text-center">
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
								<MDBBtn color='success'>Click Here</MDBBtn>
							</Link>
						</p>
					</MDBCol>
					<MDBCol lg="6" xs="12">
						
					</MDBCol>
				</MDBRow>
			</MDBContainer>
    </div>
		
	)
}

export default withRouter(Home);