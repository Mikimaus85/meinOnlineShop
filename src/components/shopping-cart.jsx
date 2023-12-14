import React, { Component } from 'react'
import Product from './product';

class ShoppingCart extends Component {
    state = { } 
    render() { 
        return <div className="shopping-cart">
            <h2>Warenkorb</h2>
            {this.props.state.items.map(item => <div key={item.name}>{item.amount} x {item.name} {item.price} €</div>)}
        </div>;
    }
}
 
export default ShoppingCart;