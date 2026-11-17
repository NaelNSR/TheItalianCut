import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import HomePizza from '../Assets/Home.png';

const Home = () => {
    return (
        <div className='home'>

            <div
                className='home-hero'
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${HomePizza})` }}
            >
                <div className='home-content'>
                    <p className='subtitle'>WELCOME TO THE ITALIAN CUT</p>

                    <h1>Authentic Italian Taste</h1>

                    <p>
                        Enjoy delicious Italian food made with fresh ingredients
                        and traditional recipes.
                    </p>

                    <Link to='/Menu' className='menu-button'>
                        Explore Our Menu
                    </Link>
                </div>
            </div>

            <div className='popular-dishes'>
                <h2>Our Popular Dishes</h2>

                <div className='dishes'>
                    <div className='dish'>
                        <h3>Margherita Pizza</h3>
                        <p>Fresh tomatoes, mozzarella and basil.</p>
                    </div>

                    <div className='dish'>
                        <h3>Alfredo Pasta</h3>
                        <p>Traditional Italian pasta with rich sauce.</p>
                    </div>

                    <div className='dish'>
                        <h3>Garlic Bread</h3>
                        <p>Freshly baked bread with garlic and herbs.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;