import React, {Component} from 'react';
import './styles/WhatIsBoccia.css';

class WhatIsBoccia extends Component {
	constructor(){
		super();
		this.state = {  
			active:1
	  	}

	}

	handleclick=(evt)=>{
		this.setState({active:evt.target.value});
			console.log(this.state.active)
	}
	handlearrow=(evt)=>{
		if(evt.target.value==1){
			if(this.state.active==1){
				this.setState({active:6})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==6){
				this.setState({active:1})
			}
			else{
				this.setState({active:parseInt(this.state.active)+1})
			}
		}		
	}

	render(){

	let GetDivButton=()=>{
		if(this.state.active==2)
			{
				return(
					<div id="WhatIsMainButtonDiv">
						<button className="WhatIsMainButton WhatIsMainButtonActive rightcurved"><p> מה זה בוצ'ה</p></button>
						<button className="WhatIsMainButton"><p>למי זה מיועד</p></button>
						<button className="WhatIsMainButton"><p>איך משחקים</p></button>
						<button className="WhatIsMainButton"><p>נבחרת ישראל</p></button>
						<button className="WhatIsMainButton leftcurved"><p>תרגול</p></button>	
					</div>
				);
			}
			if(this.state.active==3)
			{
				return(
					<div id="WhatIsMainButtonDiv">
						<button className="WhatIsMainButton rightcurved"><p> מה זה בוצ'ה </p></button>
						<button className="WhatIsMainButton WhatIsMainButtonActive"><p>למי זה מיועד</p></button>
						<button className="WhatIsMainButton"><p>איך משחקים</p></button>
						<button className="WhatIsMainButton"><p>נבחרת ישראל</p></button>
						<button className="WhatIsMainButton leftcurved"><p>תרגול </p></button>		
					</div>
				);
			}

			if(this.state.active==4)
				{
					return(
						<div id="WhatIsMainButtonDiv">
							<button className="WhatIsMainButton rightcurved"><p> מה זה בוצ'ה</p></button>
							<button className="WhatIsMainButton"><p>למי זה מיועד</p></button>
							<button className="WhatIsMainButton WhatIsMainButtonActive"><p>איך משחקים</p></button>
							<button className="WhatIsMainButton"><p>נבחרת ישראל</p></button>
							<button className="WhatIsMainButton leftcurved"><p>תרגול </p></button>	
						</div>
					);
				}
			if(this.state.active==5)
				{
					return(
						<div id="WhatIsMainButtonDiv">
							<button className="WhatIsMainButton rightcurved"><p> מה זה בוצ'ה</p></button>
							<button className="WhatIsMainButton"><p>למי זה מיועד</p></button>
							<button className="WhatIsMainButton"><p>איך משחקים</p></button>
							<button className="WhatIsMainButton WhatIsMainButtonActive "><p>נבחרת ישראל</p></button>
							<button className="WhatIsMainButton leftcurved"><p>תרגול </p></button>	
						</div>
					);
				}	
			if(this.state.active==6)
				{
					return(
						<div id="WhatIsMainButtonDiv">
							<button className="WhatIsMainButton rightcurved"><p> מה זה בוצ'ה</p></button>
							<button className="WhatIsMainButton"><p>למי זה מיועד</p></button>
							<button className="WhatIsMainButton"><p>איך משחקים</p></button>
							<button className="WhatIsMainButton"><p>נבחרת ישראל</p></button>
							<button className="WhatIsMainButton WhatIsMainButtonActive leftcurved"><p>תרגול </p></button>	
						</div>
					);
				}
	}

	let GetDivContent=()=>{
			
			if(this.state.active==1)
			{
				return(
					<div id="WhatIsContentDivFirstState">
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<div id="WhatIsContentDivFirstStatePage">
								<button className="WhatIsFirstStatePageButton" onClick={this.handleclick} value="2">01<br/>מה זה בוצ'ה</button>
								<button className="WhatIsFirstStatePageButton" onClick={this.handleclick} value="3">02<br/>למי זה מיועד</button>
								<button className="WhatIsFirstStatePageButton" onClick={this.handleclick} value="4">03<br/>איך משחקים</button>
								<button className="WhatIsFirstStatePageButton" onClick={this.handleclick} value="5">04<br/>נבחרת ישראל</button>
								<button className="WhatIsFirstStatePageButton" onClick={this.handleclick} value="6">05<br/>תרגול</button>		
						</div>
					</div>
				)
			}

			if(this.state.active==2)
			{
				return(
					<div id="WhatIsContentDiv">
								<p id="WhatIsContentText">1</p>						
					</div>
				)
			}
			if(this.state.active==3)
			{
				return(
					<div id="WhatIsContentDiv">
								<p id="WhatIsContentText">
								2
								</p>						
					</div>
				)
			}

			if(this.state.active==4)
				{
					return(
						<div id="WhatIsContentDiv">
									<p id="WhatIsContentText">3</p>						
						</div>
					)
				}
			if(this.state.active==5)
				{
					return(
						<div id="WhatIsContentDiv">
									<p id="WhatIsContentText">4</p>						
						</div>
					)				
				}	
			if(this.state.active==6)
				{
					return(
						<div id="WhatIsContentDiv">
									<p id="WhatIsContentText">5</p>						
						</div>
					)				
				}		
	}

	let GetDivFrontBack=()=>{
		if(this.state.active!=1){
			return(
				<div>
					<div id="BackButton">
						<button value="1" onClick={this.handlearrow} className="FrontBackButtons">
							🡺  הקודם
						</button>
					</div>
					<div id="FrontButton">
						<button value="2" onClick={this.handlearrow} className="FrontBackButtons">
							הבא 🢀
						</button>
					</div>		
			</div>
			);
		}
	}


		return(
			<div>
				
				<div className="sidenavbar" >
					<p className="sidenavtabs"> <a href="./#/WhatIsBoccia">LOGO</a></p>
		        	<p className="activesidenavtabs sidenavtabs"> <a href="./#/WhatIsBoccia">ארגון הבוצ'ה</a></p>
		        	<p className="sidenavtabs"> <a href="./#/BocciaClasses">סיווגים</a></p>
		         	<p className="sidenavtabs"> <a href="./#/Court">מגרש</a></p>
		         	<p className="sidenavtabs"> <a href="./#/">ציוד</a></p>
		        	<p className="sidenavtabs"> <a href="./#/">חוקה ושיפוט</a></p>
		         	<p className="sidenavtabs"> <a href="./#/">תפקידים</a></p>
		          	<p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
		 		 	<p className="sidenavtabs"> <a href="./#/">אתגר אימון </a></p>
		 		 	<p className="sidenavtabs"> <a href="./#/"> צור קשר </a></p> 
				</div>
				<div id="WhatIsMain">	
					{GetDivButton()}
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>				
			</div>

		)

	}
}

export default WhatIsBoccia;