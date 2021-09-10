import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ContactApi } from "./PersonalApi";
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
		<>
			<Helmet>
				<title>jcavenue | Contact</title>
			</Helmet>
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
					{
						ContactApi.map(contact =>  {
							return (
								<MDBCol lg="4" key={contact.Id} className="mt-3">
									<MDBCard alignment='center'  className="shadow-0 square border">
										<MDBCardBody>
											<MDBIcon fab icon={contact.Icon} size="3x" className={`${contact.IconType}`}/>
											<MDBCardTitle className="pt-3">{contact.ContactTitle}</MDBCardTitle>
											<MDBCardText>{contact.Description}</MDBCardText>
											<MDBBtn color="success" target="_blank" href={contact.Link}>{contact.LinkText}</MDBBtn>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
								)
							}
						)
					}
				</MDBRow>
				<p className="pt-4 lh-base fw-normal text-center">or follow my social media below.</p>
			</MDBContainer>
		</>
	)
}

export default withRouter(Contact);