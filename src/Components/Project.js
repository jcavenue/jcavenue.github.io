import { withRouter } from "react-router-dom";
import { 
	MDBContainer,
	MDBRow, 
	MDBCol,
	
	MDBBadge,
	MDBBtn,
	} from "mdb-react-ui-kit";


const Project = () => {
	return (
		<MDBContainer className="pt-4 mt-4">
			<section>
				<h1>Personal Projects</h1>
				<p className="pb-4">All of the project here were the outcome of what I learned from being a self taught developer <br/>
					and to state what can I do with my current skills.
				</p>
				<hr/>
			</section>
			<section>
				<MDBRow className="mt-4 pt-4">
					<MDBCol xs="12"md="12" lg="5" className="text-center ">
						<div className='bg-image hover-overlay  shadow-4'>
							<img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg' className='img-fluid rounded-3' />
							
								<div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
							
						</div>
					</MDBCol>	
					<MDBCol md="12" lg="7"className="px-4 pt-2">
						<h3>Ristorante Confusion </h3>
						<p className="fst-italic fs-6">Created 2020 <MDBBadge  className="mx-1">Bootstrap</MDBBadge>
							<MDBBadge  className="mx-1">HTML</MDBBadge></p>
						<p className="fw-normal">This is a capstone project in coursera offered by the Hongkong University of Science and Technology</p>
				
						<div className="align-self-end mt-1">
							<MDBBtn color="success">Visit Website</MDBBtn>
						</div>
						
					</MDBCol>
					<MDBCol xs="12"md="12" lg="5" className="text-center ">
						<div className='bg-image hover-overlay  shadow-4'>
							<img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg' className='img-fluid rounded-3' />
							
								<div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
							
						</div>
					</MDBCol>	
					<MDBCol md="12" lg="7"className="px-4 pt-2">
						<h3>Ristorante Confusion </h3>
						<p className="fst-italic fs-6">Created 2020 <MDBBadge  className="mx-1">Bootstrap</MDBBadge>
							<MDBBadge  className="mx-1">HTML</MDBBadge></p>
						<p className="fw-normal">This is a capstone project in coursera offered by the Hongkong University of Science and Technology</p>
				
						<div className="align-self-end mt-1">
							<MDBBtn color="success">Visit Website</MDBBtn>
						</div>
						
					</MDBCol>
				</MDBRow>
			</section>
		</MDBContainer>
	)
}






export default withRouter(Project);