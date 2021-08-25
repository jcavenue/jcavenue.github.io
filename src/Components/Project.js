import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import ProjectApi from "./ProjectApi";
import ProjectDetails from "./ProjectDetails";
import { 
	MDBContainer,
	MDBBreadcrumb,
	MDBBreadcrumbItem
	} from "mdb-react-ui-kit";


const Project = () => {
	const [project] = useState(ProjectApi);

	return (
		<>
		
			<MDBContainer className="py-5 ">
				<section className="mt-2">
					<h1 className='text-success'>Personal Projects</h1>
					<p className="pb-4 fw-light">All of the project here were the outcome of what I learned from being a self taught developer <br/>
						and to state what can I do with my current skills.
					</p>
				</section>
				<hr/>
			</MDBContainer>
			<MDBContainer className="mt-4">
				<MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Projects</MDBBreadcrumbItem>
        </MDBBreadcrumb>
				<section >
					{
						project.map((projects) => {
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