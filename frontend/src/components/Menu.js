import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Order from './Order';
import Breakfast from '../images/menu1.png';
import Salad from '../images/salad.png';
import Grill from '../images/gril.png';
import Pizza from '../images/pizza.png';
import Dessert from '../images/dessert.png';
import Coffee from '../images/coffee.png';
import Sosiski from '../images/sosiski.jpg';
import Sandwich from '../images/sandwich.jpg';
import Porridge from '../images/kasha.jpg';
import Croissants from '../images/croissants.jpg';
import Caesar from '../images/cezar.jpg';
import Greek from '../images/grecheski.jpg';
import Coat from '../images/podshuba.jpg';
import Italian from '../images/italian.jpg';
import Latte from '../images/latte.jpg';
import Cappuccino from '../images/cappuccino.jpg';
import Macchiato from '../images/macchiato.png';
import Mocha from '../images/mocha.jpg';
import Chicken from '../images/chicken.jpg';
import Pepperoni from '../images/pepperoni.jpg';
import Chic from '../images/chic.jpg';
import Tiramisu from '../images/tiramisu.jpg';
import Strawberry from '../images/stcake.jpg';
import Cheesecake from '../images/cheesecake.jpeg';
import Chocolate from '../images/chocolate.jpg';
import Steak from '../images/steak.jpg';
import Barbecue from '../images/bar.png';
import Chicgrill from '../images/chicgrill.jpg';

import '../css/menu.css';

class Menu extends Component { 
 constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.state = {

      categories: [
        {
          id: 1,
          title: 'Breakfast',
          image: Breakfast,
          foods: [
            {
              id: 1,
              img: Sosiski,
              foodName: 'American breakfast',
              description: 'American breakfast',
              price: 500,
              weight: '400 gr' 
            },
            {
              id: 2,
              img: Sandwich,
              foodName: 'Sandwich',
              description: 'This is manka',
              price: 400,
              weight: '400 gr'
            },
            {
              id: 3,
              img: Porridge,
              foodName: 'Porridge',
              description: 'Oats, fruits, berries, milk, shugar',
              price: 500,
              weight: '400 gr'
            },
            {
              id: 4,
              img: Croissants,
              foodName: 'Croissants',
              description: 'This is Croissants',
              price: 300,
              weight: '400 gr'
            },

          ]
        },
        {
          id: 2,
          title: 'Salads',
          image: Salad,
          foods: [
            {
              id: 1,
              img: Caesar,
              foodName: 'Caesar',
              description: 'This is Caesar',
              price: 600,
              weight: '300 gr'
            },
            {
              id: 2,
              img: Greek,
              foodName: 'Greek',
              description: 'This is Greek',
              price: 500,
              weight: '300 gr'
            },
            {
              id: 3,
              img: Coat,
              foodName: 'Сoat',
              description: 'This is coat',
              price: 500,
              weight: '300 gr'
            },
            {
              id: 4,
              img: Italian,
              foodName: 'Italian salad',
              description: 'This is italian salad',
              price: 700,
              weight: '300 gr'
            }
          ]
        },
        {
          id: 3,
          title: 'Grill',
          image: Grill,
          foods: [
            {
              id: 1,
              img: Steak,
              foodName: 'Steak',
              description: 'This is steak',
              price: 4000,
              weight: '800 gr'
            },
            {
              id: 2,
              img: Barbecue,
              foodName: 'Barbecue',
              description: 'This is barbecue',
              price: 800,
              weight: '300 gr'
            },
            {
              id: 3,
              img: Chicgrill,
              foodName: 'Chicken grill',
              description: 'This is chicken grill',
              price: 1000,
              weight: '600 gr'
            }
          ]

        },
        {
          id: 4,
          title: 'Pizza',
          image: Pizza,
          foods: [
            {
              id: 1,
              img: Chicken,
              foodName: 'Chicken pizza',
              description: 'This is chicken',
              price: 1800,
              weight: '800 gr'
            },
            {
              id: 2,
              img: Pepperoni,
              foodName: 'Pepperoni',
              description: 'This is pepperoni',
              price: 1500,
              weight: '800 gr'
            },
            {
              id: 3,
              img: Chic,
              foodName: 'Chic pizza',
              description: 'This is chic pizza',
              price: 100,
              weight: '800 gr'
            }
          ]

        },
        {
          id: 5,
          title: 'Dessert',
          image: Dessert,
          foods: [
            {
              id: 1,
              img: Tiramisu,
              foodName: 'Tiramisu',
              description: 'This is tiramisu',
              price: 600,
              weight: '200 gr'
            },
            {
              id: 2,
              img: Strawberry,
              foodName: 'Strawberry cake',
              description: 'This is strawberry cake',
              price: 600,
              weight: '200 gr'
            },
            {
              id: 3,
              img: Cheesecake,
              foodName: 'Cheesecake',
              description: 'This is Cheesecake',
              price: 500,
              weight: '200 gr'
            },
            {
              id: 4,
              img: Chocolate,
              foodName: 'Chocolate cake',
              description: 'This is chocolate cake',
              price: 500,
              weight: '200 gr'
            }
          ]

        },
        {
          id: 6,
          title: 'Coffee',
          image: Coffee,
          foods: [
            {
              id: 1,
              img: Latte,
              foodName: 'Latte',
              description: 'This is latte',
              price: 500,
              weight: '300 gr'
            },
            {
              id: 2,
              img: Cappuccino,
              foodName: 'Cappuccino',
              description: 'This is cappuccino',
              price: 500,
              weight: '300 gr'
            },
            {
              id: 3,
              img: Macchiato,
              foodName: 'Macchiato',
              description: 'This is macchiato',
              price: 700,
              weight: '300 gr'
            },
            {
              id: 4,
              img: Mocha,
              foodName: 'Mocha',
              description: 'This is mocha',
              price: 700,
              weight: '300 gr'
            }
          ]

        }
      ],
      orders: [],
      totalSum: 0 
    };
  }

  deleteOrder(index,price) {
    var updOrders = this.state.orders;
    updOrders.splice(index,1);
    this.setState({totalSum:this.state.totalSum-price});
    this.setState({orders: updOrders});
  }

  handleOrder(idd,foodNamee, pricee) {
    this.state.orders.push({
        id: idd,
        foodName: foodNamee,
        price: pricee
    });
    this.setState({
      totalSum:this.state.totalSum+pricee,
      orders: this.state.orders
    });
  }

  render() {
    return (
      <div className="menu">
        <div className="littleMenuPage">
          <div className="imgMenu"></div>
          <div className="container clearfix">
              <div className="categoryList service">
              <CategoryList categories = {this.state.categories} 
                            handleOrder= {(id,foodName,price)=>this.handleOrder(id,foodName,price)} />
               </div> 
               <div className="service">            
              <Order orders = {this.state.orders} deleteOrder={this.deleteOrder} totalSum={this.state.totalSum}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
