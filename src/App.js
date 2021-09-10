import { Route, Switch } from "react-router-dom";
import { Header, Home, Footer } from "./Components";
import {lazy, Suspense } from "react";

const Project = lazy(() => import("./Components/Project"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));

const App = () => {	
	return (
    <>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/About" component={About} />
					<Route path="/Project" component={Project} />
					<Route path="/Contact" component={Contact} />
				<Route exact path="/" component={Home} />
			</Switch>
			</Suspense>

			<Footer />
    </>
  );
}

export default App;
