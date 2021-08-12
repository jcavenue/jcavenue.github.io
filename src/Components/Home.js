import { withRouter } from "react-router-dom";
import { useContext } from "react";
import NameContext from "./Context";

const Home = () => {
	const [username, setUsername] = useContext(NameContext)

	return (
		<div>
			<h1 onClick={() => setUsername("hey")}>{username}</h1>
		</div>
	)
}

export default withRouter(Home);