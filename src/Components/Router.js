import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Test from "../Routes/Test";
import ChartPage from "../Routes/ChartPage"
import FormPage from "../Routes/FormPage"

export default () => (
	<Router>
		<div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} /> 
					<Route path="/test" exact component={Test} />
					<Route path="/ChartPage" exact component={ChartPage} />
					<Route path="/FormPage" exact component={FormPage} />
					<Redirect from="*" to="/" />
				</Switch>	
			</div>
		</div>
	</Router>
)