import { Route, Switch } from "react-router-dom";
import { Header, About, Project, Home, Contact, Footer } from "./Components";

const App = () => {	
	return (
    <>
			<Header />
			<Switch>
				<Route exact path="/About" component={About} />
				<Route exact path="/Project" component={Project} />
				<Route exact path="/Contact" component={Contact} />
				<Route exact path="/" component={Home} />
			</Switch>
			<Footer />
    </>
  );
}

export default App;
