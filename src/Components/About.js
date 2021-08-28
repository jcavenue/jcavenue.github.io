import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import AboutFeature from "./AboutFeature";
import AboutMore from "./AboutMore";

const About = () => {
	return (
		<>
			
			<AboutFeature />
			<AboutMore />
		</>	
	)
}

export default withRouter(About);