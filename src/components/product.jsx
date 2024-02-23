import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";

import products from "./products.json";
import "./product.css";

const fetchProduct = (productId) =>
    products.find((product) => product.id === productId);

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        switch (action) {
            case "add": {
                setQuantity((prev) => prev + 1);
                break;
            }
            case "subtract": {
                setQuantity((prev) => (prev <= 0 ? 0 : prev - 1));
                break;
            }
            default: {
                throw new Error("Invalid action!");
            }
        }
    };

    useEffect(() => {
        const product = fetchProduct(+productId);
        setProduct(product);
    }, [productId]);

    if (!product) {
        return null;
    }

    return (
        <main className="container">
            <div className="product-container">
                <section className="preview-conatiner">
                    <ReactImageMagnify
                        smallImage={{
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: product.preview,
                        }}
                        largeImage={{
                            src: product.image,
                            width: 800,
                            height: 800,
                        }}
                        enlargedImagePosition="over"
                        isHintEnabled
                    />
                </section>

                <section className="details-container">
                    <div>
                        <h2 className="product-label">{product.label}</h2>
                        <h3 className="product-price">{product.price}</h3>
                    </div>
                    <hr />
                    <div>
                        <h4 className="product-subtitle">Quantity:</h4>
                        <div className="quantity-input">
                            <button
                                onClick={() => handleQuantityChange("subtract")}
                            >
                                <FaMinus />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange("add")}>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4 className="product-subtitle">Product details:</h4>
                        <p className="product-description">
                            {product.description}
                        </p>
                        <div className="product-sku">
                            <span>SKU</span>
                            <span>{product.sku}</span>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="product-actions">
                            <button>
                                <FaCartPlus />
                                Add to Cart
                            </button>
                            <button>
                                <HiShoppingBag />
                                Buy Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Product;
