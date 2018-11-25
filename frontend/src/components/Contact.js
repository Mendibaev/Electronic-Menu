import React, { Component } from 'react';
import '../css/contact.css';
import Instagram from '../images/instagram.jpg';
import Facebook from '../images/facebook.png';

class Contact extends Component{
	render(){
		return(
			<div className="contact">
				<h2>OUR CONTACTS</h2>
				<div  className="info-karta">
					
					<div className="info-contacts">

						<p><label>Address:</label> Abylay khan, 140</p>
						<p><label>Telephone:</label> 8 (727) 222 5525</p>
						<p><label>Working hours:</label> 09:00 - 19:00</p>
						<p> 
							<label>Our web page:</label>
							<a href="https://vk.com/indira207"> www.ia.kz</a>
						</p>
						<a 	href="https://www.instagram.com/baimbetova_/"
							>
							<img src={Instagram} width="30px" alt="" height="30px" className="icons"/>
						</a>
						<a 	href="https://www.instagram.com/baimbetova_/"
							>
							<img src={Facebook} width="30px" alt="" height="30px" className="icons"/>
						</a>
					</div>
						<div className="karta"/>
					</div>
					
				</div>

		);
	}
}

export default Contact;