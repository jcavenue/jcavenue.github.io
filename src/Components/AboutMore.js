import { 
	MDBContainer, 
	MDBRow, 
	MDBCol, 
	MDBAccordion, 
	MDBAccordionItem, 
	MDBTypography, 
	MDBListGroup, 
	MDBListGroupItem 
	} from "mdb-react-ui-kit";
import { WorkExperienceApi, LanguagesAndToolsApi, certificatesApi } from "./PersonalApi";

const AboutMore = () => {
	return (
		<>
			<MDBContainer className="my-5">
				<MDBRow className="py-5">
					<MDBCol md="6" className="text-center  fw-bold">
						<MDBTypography variant='h3'>Education</MDBTypography>
					</MDBCol>
					<MDBCol md="6" className="pb-3 mt-5 mt-sm-0 text-center text-sm-start">
							<h5 className="fw-bold">ASIAN INSTITUTE OF COMPUTER STUDIES</h5>
							<p>BS Computer Science 2019 - Present</p>
					</MDBCol>
					<hr/>
					<MDBCol md="6" className="mt-5 text-center fw-bold">
						<MDBTypography variant='h3'>Work</MDBTypography>
						<MDBTypography variant='h3'>Experience</MDBTypography>
					</MDBCol>
					<MDBCol md="6" className="mt-5 text-start">
						<MDBAccordion initialActive='accordionCollapse4' className="shadow-4">
							{
								WorkExperienceApi.map((exp) => {
									return (
										<MDBAccordionItem key={exp.CollapseId} collapseId={exp.CollapseId} headerTitle={exp.HeaderTitle}>
											<p className="fw-bold">{exp.Company}</p>
											<p className="fst-italic">{exp.Year}</p> 
											<ul>
												{
													exp.Task.map((Task) => {
														return (
															<li key={Task}>{Task}</li>
														)
													})
												}
											</ul>
										</MDBAccordionItem>
									)
								})
								
							}
						</MDBAccordion>
					</MDBCol>
				</MDBRow>
				<hr/>
				<MDBRow className="py-5">
					<MDBCol xs="12" md="6" className="px-5">
						<MDBTypography variant='h3' className="pb-3 text-center">Trainings and Certificate</MDBTypography>
						<MDBListGroup className="shadow-4">
							{
								certificatesApi.map(certificates => {
									return (
										<MDBListGroupItem tag='a' target="_blank" key={certificates.id}rel="noreferrer nofollow" href={certificates.link}>{certificates.c_name}</MDBListGroupItem>
									)
								})
							}
						</MDBListGroup>
					</MDBCol >
					<MDBCol xs="12" md="6" className="mt-5 mt-md-0 px-5">
						<MDBTypography variant='h3' className="pb-3 text-center ">Programming & Tools</MDBTypography>
						<ul>
							{
								LanguagesAndToolsApi.map((Language, index) => {
									return <li key={index}>{Language}</li>
								})
							}
						</ul>
					</MDBCol>
				</MDBRow>
				<hr/>
			</MDBContainer>
		</>
	)
}

export default AboutMore;