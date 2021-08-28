import { withRouter } from "react-router-dom";
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