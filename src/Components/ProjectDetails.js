import { MDBRow, MDBCol, MDBBadge, MDBBtn} from "mdb-react-ui-kit";

const ProjectDetails = (({Project}) => {
	return (
		<MDBRow className="mt-4 pt-4">
			<MDBCol xs="12"md="12" lg="5" className="text-center ">
				<div className='bg-image hover-overlay  shadow-4'>
					<img src={Project.Img} alt="Website" className='img-fluid rounded-3' />	
						<div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
				</div>
			</MDBCol>	
			<MDBCol md="12" lg="7"className="px-4 pt-2">
				<h3>{Project.Project}</h3>
				<p className="fst-italic fs-6">{Project.Create}</p>
				<p>
					{
						Project.Tools.map(Language => {
							return (
								<MDBBadge  className="mx-1">{Language}</MDBBadge>
							);
						})
					}
				</p>
				<p className="fw-normal">{Project.Description}</p>
				<div className="align-self-end mt-1">
					<MDBBtn rounded color="success" href={Project.Link} rel="noreferrer nofollow" target="_blank">Visit Website</MDBBtn>
				</div>						
			</MDBCol>
		</MDBRow>				
		);
	}
)

export default ProjectDetails;