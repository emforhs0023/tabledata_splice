import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Test from "../Routes/Test";

export default () => (
	<Router>
		<div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} /> 
					<Route path="/test" exact component={Test} />
					<Redirect from="*" to="/" />
				</Switch>	
			</div>
		</div>
	</Router>
)