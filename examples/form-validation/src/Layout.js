import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class Layout extends React.Component{

    submitForm(){
	alert('submission');
    }
    
    render(){
	return <form onSubmit={() => {this.submitForm();}}>
	    <Grid
		container
		spacing={4}>
		<Grid
		    item
		    lg={6}>
		    <TextField
			fullWidth
			label='First Name'
			variant='outlined' />
		</Grid>
		<Grid
		    item
		    lg={6}>
		    <TextField
			fullWidth
			label='Last Name'
			variant='outlined' />
		</Grid>
		<Grid
		    container
		    justify='center'>
		    <Button
			color='primary'
			variant='contained'
			type='submit'>
			Submit
		    </Button>
		</Grid>
	    </Grid>
	</form>;
    }
}

export default Layout;
