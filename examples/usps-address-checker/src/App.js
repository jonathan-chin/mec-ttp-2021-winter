import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import secrets from './secrets.json';


const axios = require('axios');

class App extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    busy: false,
	    api: '',
	    address: ''
	};
    }

    handleChange(which, event){
	this.setState({
	    [which]: event.target.value
	});
    }

    testHandleSubmit(event){
	// simulates the API call
    }
    
    handleSubmit(event){
	event.preventDefault();
	this.setState({
	    busy: true
	});

	// simulate async call

	/*
	window.setTimeout(
	    () => {
		this.setState({
		    busy: false
		});
	    },
	    3000
	);
	*/

	// compose url
	let xml = `<?xml version="1.0" encoding="UTF-8" ?><AddressValidateRequest USERID="${secrets.api_key}"><Revision>1</Revision><Address ID="0"><Address1>1650 Bedford Ave</Address1><Address2></Address2><City>Brooklyn</City><State>NY</State><Zip5>11225</Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;
	let url = `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=${xml}`;

	axios.get(url)
	     .then((response) => {
		 // call is successful
		 console.log(response.data);
	     })
	     .catch((error) =>{
		 // call has some error
		 console.log(error);
	     })
	     .finally(() => {
		 this.setState({
		     busy: false
		 });
	     });
    }
    
    render(){
	return (
	    <Container>
		<form onSubmit={(event) => {
			this.handleSubmit(event);
		}}>
		    <TextField
			disabled={this.state.busy}
			fullWidth
			variant='outlined'
			value={this.state.api}
			onChange={(event) => {this.handleChange('api', event);}}
			label='USPS API key'
		    />
		    <TextField
			disabled={this.state.busy}
			fullWidth
			variant='outlined'
			value={this.state.address}
			onChange={(event) => {this.handleChange('address', event);}}
			label='Address to validate'
		    />
		    <Button
			disabled={this.state.busy}
			color='primary'
			type='submit'
			variant='contained'>
			Begin
		    </Button>
		</form>
		<Backdrop open={this.state.busy}>
		    <CircularProgress />
		</Backdrop>
	    </Container>
	);
    }
}

export default App;

