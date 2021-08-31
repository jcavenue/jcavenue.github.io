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
						<MDBAccordion initialActive='accordionCollapse1' className="shadow-4">
							<MDBAccordionItem collapseId='accordionCollapse1' headerTitle='Assistant Graphic Designer'>
								<p className="fw-bold">Kent Graphic Solution</p>
								<p className="fst-italic">October 2018 - March 2019</p> 
								<ul>
									<li>Create Graphic Design for tarpaulin</li>
									<li>Assisting in managing client's order</li>
									<li>Work closely with the owner</li>
								</ul>
							</MDBAccordionItem>
							<MDBAccordionItem collapseId='accordionCollapse2' headerTitle='Email Support Representative'>
								<p className="fw-bold">SPi CRM Inc, now INSPIRO</p>
								<p className="fst-italic">April 2018 - August 2018</p> 
								<ul>
									<li>Customer Service</li>
									<li>Email Support</li>
								</ul>
							</MDBAccordionItem>
							<MDBAccordionItem collapseId='accordionCollapse3' headerTitle='Office Personel'>
								<p className="fw-bold">Traditional Food Corporation</p>
								<p className="fst-italic">Jan 2016 - October 2016</p> 
								<ul>
									<li>Sorting files</li>
									<li>Delivery Management</li>
								</ul>
							</MDBAccordionItem>
						</MDBAccordion>
					</MDBCol>
				</MDBRow>
				<hr/>
				<MDBRow className="py-5">
					<MDBCol xs="12" md="6" className="px-5">
						<MDBTypography variant='h3' className="pb-3 text-center">Trainings and Certificate</MDBTypography>
						<MDBListGroup className="shadow-4">
							<MDBListGroupItem tag='a' target="_blank" rel="noreferrer nofollow" href='https://www.coursera.org/account/accomplishments/specialization/certificate/3ZYGPNC72GE3'>PostgreSQL for Everybody Specialization</MDBListGroupItem>
							<MDBListGroupItem tag='a' target="_blank" rel="noreferrer nofollow" href='https://www.coursera.org/account/accomplishments/specialization/certificate/WJXSQCTL436W'>Web Application for Everybody Specialization</MDBListGroupItem>
							<MDBListGroupItem tag='a' target="_blank" rel="noreferrer nofollow" href='https://www.coursera.org/account/accomplishments/certificate/CBHFKKE8HL56'>Version Control with Git</MDBListGroupItem>
							<MDBListGroupItem tag='a' target="_blank" rel="noreferrer nofollow" href='https://www.coursera.org/account/accomplishments/certificate/RUHW9MK5782D'>Front-End Web UI Frameworks and Tools: Bootstrap 4</MDBListGroupItem>
							<MDBListGroupItem tag='a' target="_blank" rel="noreferrer nofollow" href='https://www.futurelearn.com/certificates/geih6gx'>IT ETHICS: Professionalism and Ethics in Computing</MDBListGroupItem>
						</MDBListGroup>
					</MDBCol >
					<MDBCol xs="12" md="6" className="mt-5 mt-md-0 px-5">
						<MDBTypography variant='h3' className="pb-3 text-center ">Programming & Tools</MDBTypography>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>PHP</li>
							<li>React</li>
							<li>Git and Github</li>
							<li>Postgresql</li>
							<li>MySQL</li>
						</ul>
					</MDBCol>
				</MDBRow>
				<hr/>
			</MDBContainer>

		</>
	)
}

export default AboutMore;