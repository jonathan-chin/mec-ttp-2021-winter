import AboutUs from './AboutUs';
import AppBar from '@material-ui/core/AppBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Help from './Help';
import {Link} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
	<Router>
	    <AppBar position="static">
		<Toolbar>
		    <Typography style={{flex: 1}}>
			Example for React Router
		    </Typography>
		    <Link component={Button} color="inherit" to="/about-us">
			About Us
		    </Link>
		    <Link component={Button} color="inherit" to="/help">
			Help
		    </Link>
		</Toolbar>
	    </AppBar>
	    <Container>
		<Switch>
		    <Route path="/about-us">
			<AboutUs />
		    </Route>
		    <Route path="/help">
			<Help />
		    </Route>
		    <Route path="/">
			<AboutUs />
		    </Route>
		</Switch>
	    </Container>
	</Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
