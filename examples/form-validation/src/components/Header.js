import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component{
    render(){
	return <AppBar
		   position='static'>
	    <Toolbar>
		<Typography style={{flex: 1}}>
		    Form Validation Example
		</Typography>
		<Button
		    component={Link}
		    color='inherit'
		    to='/'>
		    Intro
		</Button>
		<Button
		    component={Link}
		    color='inherit'
		    to='/layout'>
		    Layout
		</Button>
		<Button
		    component={Link}
		    color='inherit'
		    to='/controlled'>
		    Controlled
		</Button>
	    </Toolbar>
	</AppBar>;
    }
}

export default Header;
