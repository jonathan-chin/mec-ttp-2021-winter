import React from 'react';
import Cell from './Cell.js';

class App extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    seleted_cell: -1
	};
    }

    
    setCell(index){
	this.setState({
	    selected_cell: index
	});
    }
    
    render(){
	const data = [];
	for(let index = 0; index < 100; index++){
	    data.push(index);
	}

	const cells = data.map((index) => {
	    return <Cell key={index}
			 number={index}
			 selected={index === this.state.selected_cell}
			 onClick={() => {this.setCell(index);}}/>;
	});
	
	return (
	    <div>
		{cells}
	    </div>
	);
    }
}

export default App;
