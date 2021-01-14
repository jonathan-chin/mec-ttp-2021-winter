// assume all fields must have at least 3 characters
// assume all fields cannot be more than 20 characters

// validate functions will return an empty string '' if there is no error
// otherwise a string with a description of the error

function validate_first_name(value){
    if(value.length < 3){
	return 'Must be at least 3 characters long';
    }
    if(value.length > 20){
	return 'Cannot be more than 20 characters long'
    }
    
    // implied else
    return '';
}

function validate_last_name(value){
    if(value.length < 3){
	return 'Must be at least 3 characters long';
    }
    if(value.length > 20){
	return 'Cannot be more than 20 characters long'
    }
    
    // implied else
    return '';
}


export {
    validate_first_name,
    validate_last_name
};
