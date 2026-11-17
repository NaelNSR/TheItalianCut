const FoodItem = (props) => {
    return (
        <div className='food-card'>
            <img src={props.image} alt={props.name} />

            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h3>${props.price}</h3>

            <button onClick={props.addToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default FoodItem;