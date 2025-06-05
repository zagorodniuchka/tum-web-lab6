import {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductCard({ img, name, price }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Toggle favorite state
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    // Add item to cart
    const addToCart = () => {
        const item = { img, name, price };
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${name} added to cart!`);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img} alt={name} />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>{price}</p>
                <div className="product-actions">
                    <i
                        className={`fas fa-heart ${isFavorited ? 'favorited' : ''}`}
                        onClick={toggleFavorite}
                        aria-hidden="true"
                    ></i>
                    <i
                        className="fas fa-shopping-cart"
                        onClick={addToCart}
                        aria-hidden="true"
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default function App() {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Sync cart state with localStorage changes
    useEffect(() => {
        const handleStorageChange = () => {
            const savedCart = localStorage.getItem('cart');
            setCart(savedCart ? JSON.parse(savedCart) : []);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    useEffect(() => {
        const mascot = document.querySelector(".mascot-container");
        setTimeout(() => {
            mascot?.classList.add("show");
        }, 2000);
    }, []);

    return (
        <>
            <header>
                <nav className="flex items-center justify-between p-4">
                    <div className="logo-area flex items-center">
                        <div className="logo-img mr-2" />
                        <div className="logo text-xl font-bold">Plush Store</div>
                    </div>
                    <ul className="nav-links flex space-x-4">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#products">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="icons flex space-x-2">
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </nav>
            </header>

            <section id="hero" className="hero">
                <h1>Handmade Crochet Plushies</h1>
                <p>Discover our adorable collection of crochet plushies, perfect for gifting or decorating!</p>
                <button>Shop Now</button>
            </section>

            <section className="mobile-welcome text-center p-4">
                <h2>Welcome to Plush Store!</h2>
                <p>Explore our cute crochet creations on the go!</p>
            </section>

            <section id="products" className="products px-4">
                <h2 className="text-2xl font-bold my-4">Toys</h2>
                <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Repeat product-card component as needed */}
                    {/* Example below */}
                    <ProductCard img="images/bunny.jpg" name="Bunny Plushie" price="$15.00" />
                    <ProductCard img="images/bear.jpg" name="Bear Plushie" price="$18.00" />
                    <ProductCard img="images/duck.jpg" name="Duck Plushie" price="$12.00" />
                    <ProductCard img="images/fox.jpg" name="Fox Plushie" price="$20.00" />
                    <ProductCard img="images/anya.JPG" name="Anya" price="$30.00" />
                    <ProductCard img="images/doll1.JPG" name="Tartaglia" price="$35.00" />
                    <ProductCard img="images/sheep.jpg" name="Sheep" price="$18.00" />
                    <ProductCard img="images/hippo.jpg" name="Hippo" price="$23.00" />
                    <ProductCard img="images/pig.jpg" name="Pig" price="$15.00" />
                    <ProductCard img="images/totoro.jpg" name="Totoro" price="$40.00" />
                </div>

                <h2 className="text-2xl font-bold my-4">Clothes and Accessories</h2>
                <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <ProductCard img="images/sumka2.jpg" name="Sunflower Bag" price="$20.00" />
                    <ProductCard img="images/sumka.jpg" name="Cute Bag" price="$23.00" />
                    <ProductCard img="images/cclothes.jpg" name="Cardigan" price="$70.00" />
                </div>
            </section>

            <section id="about" className="hero">
                <h1>About Us</h1>
                <p>We create unique crochet plushies with love and care. Each piece is handmade to bring joy and warmth to your life.</p>
            </section>


            <section id="contact" className="contact p-4 text-center">
                <h2>Contact Us</h2>
                <p>
                    Email: <a href="mailto:info@plushstore.com">info@plushstore.com</a> | Phone: (79) 52 24 52 | Follow us on
                    <a
                        href="https://www.instagram.com/__plush__store__/?igsh=cXMxd2MwcHBmOHI1&utm_source=qr#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram ml-1"></i>
                    </a>
                </p>
            </section>

            <div className="mascot-container">
                <img src="images/mascot.png" alt="Mascot" className="mascot" />
                <div className="mascot-message">
                    Hi! I'm Kitty! Click "Shop Now" to explore our plushies!
                </div>
            </div>

            <footer className="text-center p-4">
                <p>© 2025 Plush Store. All rights reserved.</p>
            </footer>
        </>
    );
}