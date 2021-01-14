import{
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';

// import 'page' components
import Controlled from './Controlled';

// Formik integration is a work in progress. ignore for now
//import Formik from './Formik';
import Intro from './Intro';
import Layout from './Layout';

ReactDOM.render(
    <React.StrictMode>
	<Router>
	    <Header />
	    <Container style={{marginTop: 20}}>
		<Switch>
		    <Route
			exact
			path='/layout'
			component={Layout} />
		    <Route
			exact
			path='/controlled'
			component={Controlled} />
		    <Route
			path='/'
			component={Intro} />
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
