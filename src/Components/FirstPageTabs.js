import React, {Component, componentDidUpdate} from 'react';
import './styles/FirstPageTabs.css';

class FirstPageTabs extends Component {
	constructor(props){
		super();
		this.state = {  
			names:props.names,
	  	}
	}

	handleclick=(val)=>{
    	this.props.onClick(val);
 		}

	  	render(){

	  		let FinalTabs = [];
	  		this.state.names.forEach((element,i)=>{
	  			FinalTabs.push(
	  			<button className="FirstStatePageButton" onClick={()=>this.handleclick(i+1)} value={i+1}> 0{i+1}<br/>{this.state.names[i]}</button>
	  			)
	  		})

	  		return(
	  			<div className="ContentDivFirstStatePage">
						{FinalTabs}
				</div>
	  		);

	  	

	}
}

export default FirstPageTabs;