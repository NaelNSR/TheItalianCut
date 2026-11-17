
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>

            <div className='footer-content'>

                <div className='footer-brand'>
                    <h2>THE ITALIAN CUT</h2>
                    <p>Authentic Italian Cuisine</p>
                    <p>
                        Bringing the taste of Italy to your table
                        with fresh ingredients and classic recipes.
                    </p>
                </div>

                <div className='footer-info'>
                    <h3>Our Promise</h3>
                    <p>Fresh Ingredients</p>
                    <p>Authentic Italian Recipes</p>
                    <p>Made with Passion</p>
                </div>

            </div>

            <div className='footer-bottom'>
                <p>© 2026 The Italian Cut. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
