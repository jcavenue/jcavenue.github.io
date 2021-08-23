import { useState } from "react";
import { withRouter } from "react-router-dom";
import ProjectApi from "./ProjectApi";
import ProjectDetails from "./ProjectDetails";
import { 
	MDBContainer,
	} from "mdb-react-ui-kit";


const Project = () => {
	const [project] = useState(ProjectApi);

	return (
		<>
			<div className="bg-DFEEEA shadow-4">
				<MDBContainer className="py-5 bg-DFEEEA">
					<section className="mt-2">
						<h1>Personal Projects</h1>
						<p className="pb-4 fw-light">All of the project here were the outcome of what I learned from being a self taught developer <br/>
							and to state what can I do with my current skills.
						</p>
					</section>
				</MDBContainer>
			</div>
			<MDBContainer className="pt-4 mt-4">
				<section >
					{
						project.map((projects) => {
								return (
									<ProjectDetails key={projects} Project={projects}/>
							);
						})
					}
					<hr />
				</section>
			</MDBContainer>
		</>
	)
}

export default withRouter(Project);