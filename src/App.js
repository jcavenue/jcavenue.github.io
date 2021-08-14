import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";


function App() {
	
  return (
    <div>
			<Router>
				<Header />
				<Switch>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/Project">
						<Project />>
					</Route>
					<Route path="/Contact">
						<Contact />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
			<Footer />
    </div>
  );
}

export default App;
