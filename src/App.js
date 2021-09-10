import { Route, Switch } from "react-router-dom";
import { Header, About, Project, Home, Contact, Footer } from "./Components";

const App = () => {	
	return (
    <>
			<Header />
			<Switch>
				<Route path="/About" component={About} />
				<Route path="/Project" component={Project} />
				<Route path="/Contact" component={Contact} />
				<Route exact path="/" component={Home} />
			</Switch>
			<Footer />
    </>
  );
}

export default App;
