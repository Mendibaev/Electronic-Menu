import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import FoodList from './FoodList';
import '../css/categoryList.css';


class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: null
		};
		this.showFoods = this.showFoods.bind(this);
		this.createOrder = this.createOrder.bind(this);


	}
	showFoods(category) {
		this.setState({show: category});

	}
	createOrder(id,foodName, price) {
		console.log(foodName,price)
		this.props.handleOrder(id,foodName,price);
	}
	render() {
		let categories = this.props.categories;

		let items = categories.map((category) => {
					return <CategoryItem key = {category.id} img = {category.image}
					categoryClick = {()=> this.showFoods(category)}/>
				});
		let shownFoods = null;
		if(this.state.show!=null) {
			
			shownFoods = <FoodList foods = {this.state.show.foods}
							createOrder = {(id,foodName,price)=>this.createOrder(id,foodName,price)}/>
			//console.log(this.state.show.foods)
		}
				
		return(
			<div className = "content">
				<div className = "categoryList">
					{items}
				</div>
				<div className="service">
					{shownFoods}
				</div>
			</div>
		);
	}
		
}

export default CategoryList;