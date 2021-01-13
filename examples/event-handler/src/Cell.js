import React from 'react';

class Cell extends React.Component{
    render(){
	let class_name = 'cell';
	if(this.props.selected){
	    class_name += ' selected';
	}
	return (
	    <div className={class_name} onClick={this.props.onClick}>
		this is a cell #{this.props.number}
	    </div>
	);
    }
}

export default Cell;
