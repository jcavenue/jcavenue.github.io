import { MDBRow, MDBCol, MDBBadge, MDBTypography, MDBBtn, MDBIcon} from "mdb-react-ui-kit";


const ProjectDetails = (({Project}) => {
	return (
		<MDBRow className="mt-4 pt-4">
			<MDBCol xs="12"md="12" lg="5" className="text-center ">
				<div className='bg-image hover-overlay  shadow-4'>
					<img src={Project.Img} alt="Website" className='img-fluid rounded-3' />	
						<div className='mask rounded-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
				</div>
			</MDBCol>	
			<MDBCol md="12" lg="7"className="px-4 pt-4 pt-sm-2">
				<MDBTypography variant='h3' className="fw-bold text-center text-md-start">{Project.Project}</MDBTypography>
				<p className="fst-italic fs-6">{Project.Create}</p>
				<p>
					{
						Project.Tools.map(Language => {
							return (
								<MDBBadge color="dark" className="mx-1 fw-normal">{Language}</MDBBadge>
							);
						})
					}
				</p>
				<p className="lh-base fw-normal">{Project.Description}</p>
				<div className="align-self-end mt-1">
					<MDBBtn color="success" href={Project.Link} rel="noreferrer nofollow" target="_blank">Visit Website<MDBIcon fas icon="external-link-alt" className="p-1"/></MDBBtn>
				</div>						
			</MDBCol>
		</MDBRow>				
		);
	}
)

export default ProjectDetails;