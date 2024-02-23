import "./MainContainer.css";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

import products from "./products.json";

function MainContainer() {
    return (
        <main className="main">
            <img
                className="banner"
                src="https://static.sastodeal.com/media/myntra banner 2.jpg"
                alt="banner-2"
                draggable={false}
            />
            <img
                className="banner"
                src="https://static.sastodeal.com/media/atom 520 banner 1.jpg"
                alt="banner-1"
                draggable={false}
            />
            <img
                className="banner full-width"
                src="https://static.sastodeal.com/media/myntra banner 1920 by 300.jpg"
                alt="banner-3"
                draggable={false}
            />
            <section className="title-container">
                <h2 className="title">SD Picks </h2>
                <h3 className="subtitle">Popular Picks from Sastodeal</h3>
            </section>
            <section className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link
                            className="product-link"
                            to={"product/" + product.id}
                        >
                            <img
                                className="product-img"
                                src={product.preview}
                                alt="product"
                                draggable={false}
                            />
                        </Link>
                        <span className="product-wishlist">
                            <FaRegHeart />
                        </span>
                        <div className="product-texts">
                            <div className="label">
                                <Link
                                    className="product-link"
                                    to={"product/" + product.id}
                                >
                                    {product.label}
                                </Link>
                            </div>
                            <div className="price">{product.price}</div>
                        </div>
                        <div className="product-action">
                            <button>
                                Add to Cart
                                <FaCartPlus />
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default MainContainer;
