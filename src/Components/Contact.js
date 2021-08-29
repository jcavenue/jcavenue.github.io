import { withRouter, Link } from "react-router-dom";
import {
		MDBContainer,
		MDBTypography,
		MDBRow,
		MDBCol,
		MDBCard,
		MDBCardBody,
		MDBCardTitle,
		MDBCardText,
		MDBBtn,
		MDBIcon,
		MDBBreadcrumb,
		MDBBreadcrumbItem,
		

					
					} from "mdb-react-ui-kit";

const Contact = () => {
	return (
		<MDBContainer>
			<MDBRow className="pt-5 text-center">
				<MDBTypography variant='h1' className="fw-bold text-dark text-center text-md-start">Get in touch</MDBTypography>
				<p className="mb-5 lh-base fw-normal text-center text-md-start">
					If you have any enquiries or something to discuss, Here are the few ways to reach out with me.
				</p> 
				<hr/>
				<MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Contact</MDBBreadcrumbItem>
        </MDBBreadcrumb>
				<MDBCol md="4" className="mt-3">
					<MDBCard alignment='center'>
						<MDBCardBody>
							<MDBIcon fas icon="phone-alt" size="3x" className="pb-3"/>
							<MDBCardTitle>+63 963 3218 452</MDBCardTitle>
							<MDBCardText>Call me directly</MDBCardText>
							<MDBBtn color="success" href='tel:+63 963 3218 452'>CALL</MDBBtn>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
				<MDBCol md="4" className="mt-3">
					<MDBCard alignment='center'>
						<MDBCardBody>
							<MDBIcon fas icon="at" size="3x" className="pb-3"/>
							<MDBCardTitle>jcfababeir30@gmail.com</MDBCardTitle>
							<MDBCardText>Send me an email</MDBCardText>
							<MDBBtn color="success" href='mailto:jcfababeir30@gmail.com'>EMAIL</MDBBtn>
						</MDBCardBody>
						
					</MDBCard>
				</MDBCol>
				<MDBCol md="4" className="mt-3">
					<MDBCard alignment='center'>
						<MDBCardBody>
							<MDBIcon fab icon="telegram" size="3x" className="pb-3"/>
							<MDBCardTitle>t.me/jcavenue</MDBCardTitle>
							<MDBCardText>Message me on Telagram</MDBCardText>
							<MDBBtn color="success" target="_blank" href='https://t.me/jcavenue'>MESSAGE</MDBBtn>
						</MDBCardBody>
						
					</MDBCard>
				</MDBCol>
			</MDBRow>
			<p className="pt-4 lh-base fw-normal text-center">
					or follow my social media below.
				</p>
		</MDBContainer>
	)
}

export default withRouter(Contact);