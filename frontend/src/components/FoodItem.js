import React, {Component} from 'react';
import '../css/foodItem.css';

class FoodItem extends Component {

render() {
	return(
		<div className="foodItem" onClick = {this.props.takeOrder}>
			<img src={this.props.img} alt=""/>
			<div>
			<div className = "name">
				<label>Name:</label>
				<span > {this.props.name}</span>
			</div>
			<div className = "name">
				<label>Сomposition:</label>
				<span > {this.props.description}</span>
			</div>
			<div className = "name">
				<label>Price:</label>
				<span > {this.props.price}</span>
				</div>
			<div className = "name">
				<label>Weight:</label>
				<span > {this.props.weight}</span>
			</div>
			</div>
		</div>

	);
}

}
export default FoodItem;