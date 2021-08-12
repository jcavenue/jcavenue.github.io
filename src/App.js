import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NameContext from "./Components/Context";


function App() {
	const name = useState('John Carlo Fababeir')
  return (
    <NameContext.Provider value={name}>
			<Router>
				<Header />
				<Switch>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/Project">
					</Route>
					<Route path="/Contact">
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
			<Footer />
    </NameContext.Provider>
  );
}

export default App;
