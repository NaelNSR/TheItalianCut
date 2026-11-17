
import '../Styles/Menu.css';
import FoodItem from '../Components/FoodItem.jsx';

import Margherita from '../Assets/MargheritaPizza.png';
import Pepperoni from '../Assets/PepperoniPizza.png';
import Carbonara from '../Assets/CarbonaraPasta.png';
import Alfredo from '../Assets/AlfredoPasta.png';
import GarlicBread from '../Assets/GarlicBread.png';
import Tiramisu from '../Assets/Tiramisu.png';

const Menu = ({ addToCart }) => {

    const foodItems = [
        { id: 1, name: 'Margherita Pizza', description: 'Tomato sauce, mozzarella and fresh basil.', price: 12, image: Margherita },
        { id: 2, name: 'Pepperoni Pizza', description: 'Mozzarella cheese and pepperoni.', price: 15, image: Pepperoni },
        { id: 3, name: 'Carbonara Pasta', description: 'Creamy sauce, parmesan and bacon.', price: 14, image: Carbonara },
        { id: 4, name: 'Alfredo Pasta', description: 'Creamy Alfredo sauce and parmesan.', price: 13, image: Alfredo },
        { id: 5, name: 'Garlic Bread', description: 'Fresh bread with garlic and herbs.', price: 6, image: GarlicBread },
        { id: 6, name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 8, image: Tiramisu }
    ];

    return (
        <div className='menu-page'>
            <h1>Our Menu</h1>
            <p>Discover our selection of authentic Italian dishes.</p>

            <div className='menu-items'>
                {foodItems.map((item) => (
                    <FoodItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        addToCart={() => addToCart(item)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
