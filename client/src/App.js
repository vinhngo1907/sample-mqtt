import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import About from './views/About';
import NavbarMenu from "./components/NavbarMenu";
function App() {

	return (
			<Router>
				<NavbarMenu />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/about" component={About} />

				</Switch>
			</Router>
	);
}

export default App;
