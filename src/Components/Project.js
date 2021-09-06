import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProjectApi from "./ProjectApi";
import ProjectDetails from "./ProjectDetails";
import { 
	MDBContainer,
	MDBBreadcrumb,
	MDBBreadcrumbItem,
	MDBTypography
	} from "mdb-react-ui-kit";


const Project = () => {

	return (
		<>
			<Helmet>
				<title>jcavenue | Project</title>
			</Helmet>
			<MDBContainer className="py-5 ">
				<section className="mt-2">
					<MDBTypography variant='h1' className="fw-bold text-dark text-center text-md-start">Personal Projects</MDBTypography>
					<p className="pb-4 lh-base text-center text-sm-start fw-normal">All of the project here were the outcome of what I learned from being a self taught developer and to state what can I do with my current skills.
					</p>
				</section>
				<hr/>
			</MDBContainer>
			<MDBContainer>
				<MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Projects</MDBBreadcrumbItem>
        </MDBBreadcrumb>
				<section >
					{
						ProjectApi.map((projects) => {
								return (
									<ProjectDetails key={projects} Project={projects}/>
							);
						})
					}
					<hr className="mt-5"/>
				</section>
			</MDBContainer>
		</>
	)
}

export default withRouter(Project);