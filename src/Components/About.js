import { withRouter } from "react-router-dom";
import AboutFeature from "./AboutFeature";
import AboutMore from "./AboutMore";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<>
			<Helmet>
				<title>jcavenue | About</title>
			</Helmet>
			<AboutFeature />
			<AboutMore />
		</>	
	)
}

export default withRouter(About);