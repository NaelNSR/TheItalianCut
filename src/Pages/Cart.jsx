import '../Styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {

    let total = 0;

    return (
        <div className='cart-page'>
            <h1>Your Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => {
                        total = total + item.price;

                        return (
                            <div className='cart-item' key={index}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>

                                <button onClick={() => removeFromCart(index)}>
                                    Remove
                                </button>
                            </div>
                        );
                    })}

                    <h2>Total: ${total}</h2>
                </div>
            )}
        </div>
    );
}

export default Cart;