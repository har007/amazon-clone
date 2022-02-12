import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user},dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img  className="checkout__ad"src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>
                                Your Shopping Basket is Empty
                            </h2>
                            <p>You have no items in your baket .To buy one or more items,"Add to the basket" next to the item</p>
                        </div>
                    ):(
                        <div>
                            <h2>
                                Your Shopping Basket
                            </h2>
                            {/* List out all Checkout Product */}
                            {basket.map(item=>(
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}
                        </div>
                    )
                }
 
            </div>
            {basket.length >0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
            )}
        </div>
    )
}

export default Checkout
