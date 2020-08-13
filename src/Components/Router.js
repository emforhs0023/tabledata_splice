import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Test from "../Routes/Test";
import ChartPage from "../Routes/ChartPage"
import FormPage from "../Routes/FormPage"
import TimeData from "../Routes/TimeData"
import Change from "../Routes/Change"
import Input from "../Routes/Input"
import Chart from "../Routes/Chart"
import Excel from "../Routes/Excel"
import DataTablePage from "../Routes/DataTablePage"
import antdTableRowClick from "../Routes/antdTableRowClick"
import DataListPage from "../Routes/DataListPage"

// import ModalPage from "../Routes/ModalPage"
// import Serverside from "../Routes/Serverside"

export default () => (
	<Router>
		<div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} /> 
					<Route path="/test" exact component={Test} />
					<Route path="/ChartPage" exact component={ChartPage} />
					<Route path="/FormPage" exact component={FormPage} />
					<Route path="/TimeData" exact component={TimeData} />
					<Route path="/Change" exact component={Change} />
					<Route path="/Input" exact component={Input} />
					<Route path="/Chart" exact component={Chart} />
					<Route path="/excel" exact component={Excel} />
					<Route path="/DataTablePage" exact component={DataTablePage} />
					<Route path="/antdTableRowClick" exact component={antdTableRowClick} />
					<Route path="/DataListPage" exact component={DataListPage} />
					
					{/* <Route path="/Modal" exact component={ModalPage} /> */}
					{/* <Route path="/Serverside" exact component={Serverside} /> */}
					<Redirect from="*" to="/" />
				</Switch>	
			</div>
		</div>
	</Router>
)