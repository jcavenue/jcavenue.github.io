import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

const App = () => {	
	return (
    <>
			<Router>
				<Header />
				<Switch>
					<Route path="/About" component={About} />
					<Route path="/Project" component={Project} />
					<Route path="/Contact" component={Contact} />
					<Route exact path="/" component={Home}/>
				</Switch>
			</Router>
			<Footer />
    </>
  );
}

export default App;
