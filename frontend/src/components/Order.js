import React, { Component } from 'react';
import '../css/order.css';

class Order extends Component{
	constructor(props) {
		super(props);
		
		this.remove = this.remove.bind(this);
		this.orderSend = this.orderSend.bind(this);

	}
	remove(index, price) {
		this.props.deleteOrder(index,price);
	}

	orderSend(){
		alert("Your order is successfully accepted!");
	}

	render(){
		let orders = this.props.orders;
		let orderItems = orders.map((order, index)=>{
				return(
					<div  className="orderItem" key={index}>
						<div className="orderName"><p>{order.foodName}</p></div>
						<div><input value={order.price} disabled="true" /></div>
						<div><button onClick={()=>this.remove(index,order.price)}>X</button></div>
					</div>
				);
		});
		let sum = this.props.totalSum;

		return(
			<div className="orderPage">
				<h3>Your order</h3>
				<div className="white-1"/>
				<div className="order">
					{orderItems}
				</div>
				<div className="white-2"/>
				
				<div className="total">
					<p>Total:</p> 
					<input disabled="true" value={sum}/>
				</div>
				<div className="white-1"/>
				<div className="specialRequest" onClick={this.showRequest}>
					<p>+ Special requests:</p>
					
				</div>
				<div className="white-1"/>
				<div className="time">
					<p> When: in 15 minutes</p>
				</div>
				<div><button className="orderButton" onClick={this.orderSend}> Order ></button></div>
			</div>
		);
	}
}

export default Order;