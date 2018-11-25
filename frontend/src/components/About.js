import React, { Component } from 'react';
import '../css/about.css';

class About extends Component{ 
	render(){
		return(
			<div className="about">
				<div className="first">
					<img alt=""/>
				</div>
				<div className="second">
					<div className="s-history">
						<h2> OUR HISTORY: </h2>
						<p>Here will be the story of  the restaurant, its foundation, history and other stuff.</p>
					</div>
					<div className="s-image"></div>
				</div>
				<div className="third">
					<div className="t-image"></div>
					<div className="t-news">
						<h2> LATEST NEWS: </h2>
						<p>Here will be the news about  the restaurant, new offers to clients, events and other stuff.</p>
					</div>
				</div>
				<div className="fourth">
					
				</div>
				<div className="fifth">
					
				</div>
			</div>
		);
	}
}

export default About; 