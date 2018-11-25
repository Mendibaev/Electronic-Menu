import React, {Component} from 'react';
import FoodItem from './FoodItem';

class FoodList extends Component {
constructor(props) {
	super(props);
	this.takeOrder = this.takeOrder.bind(this);
}
takeOrder(id,foodName,price) {

	this.props.createOrder(id,foodName,price);
}
render() {
		let foods = this.props.foods;
		let items = foods.map((food,index) => {
					return <FoodItem key = {index} img = {food.img} name = {food.foodName}
					description = {food.description} price = {food.price} 
					weight = {food.weight} 
					takeOrder={()=>this.takeOrder(index,food.foodName,food.price)} />
				});
		return(
			<div>
				{items}
			</div>
		);
	}
}

export default FoodList;