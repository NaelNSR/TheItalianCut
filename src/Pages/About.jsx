
import '../Styles/About.css';
import AboutImage from '../Assets/Aboutus.png';

const About = () => {
    return (
        <div className='about-page'>
            <div
                className='about-hero'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.70)), url(${AboutImage})`
                }}
            >
                <div className='about-hero-content'>
                    <p>OUR STORY</p>
                    <h1>More Than Just Pizza</h1>
                    <p>
                        A passion for Italian food, fresh ingredients,
                        and unforgettable moments around the table.
                    </p>
                </div>
            </div>

            <div className='about-story'>
                <h2>Welcome to The Italian Cut</h2>
                <p>
                    The Italian Cut was created with one simple idea:
                    to bring the authentic taste of Italian cuisine
                    to every table. We believe that great food starts
                    with fresh ingredients, traditional recipes, and
                    a passion for cooking.
                </p>
                <p>
                    From our delicious pizzas to our creamy pasta
                    and classic desserts, every dish is prepared
                    to make your dining experience special.
                </p>
            </div>

            <div className='about-values'>
                <h2>What Makes Us Special</h2>

                <div className='values-container'>
                    <div className='value-card'>
                        <h3>Fresh Ingredients</h3>
                        <p>
                            We believe quality ingredients make
                            every dish better.
                        </p>
                    </div>

                    <div className='value-card'>
                        <h3>Italian Tradition</h3>
                        <p>
                            Inspired by classic Italian recipes
                            and flavors.
                        </p>
                    </div>

                    <div className='value-card'>
                        <h3>Made with Passion</h3>
                        <p>
                            Every meal is prepared with care
                            and attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
