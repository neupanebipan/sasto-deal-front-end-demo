import { useState } from "react";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { BsTag } from "react-icons/bs";
import { MdOutlineCategory, MdOutlineStorefront } from "react-icons/md";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import "./navbar.css";

function Navbar() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = (e) => setSearchValue(e.target.value);

    const [isSignInModalOpen, setSignInModalOpen] = useState(false);
    const openSignInModal = () => setSignInModalOpen(true);
    const closeSignInModal = () => setSignInModalOpen(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const handleLoginSuccess = (credentialResponse) => {
        const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential,
        );
        console.log(credentialResponseDecoded);
        setUserName(credentialResponseDecoded.name);
        setLoggedIn(true);

        setLoggedIn(true);

        toast.success("Login successful!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        closeSignInModal();
    };

    const handleLogout = () => {
        localStorage.removeItem("user");

        googleLogout();
        setLoggedIn(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <section className="navbar-top">
                    <div className="navbar-left-panel">
                        <span>Connect with us</span>
                        <span className="social-links">
                            <a href="" target="_blank">
                                <FaFacebookF />
                            </a>
                            <a href="" target="_blank">
                                <FaTwitter />
                            </a>
                            <a href="" target="_blank">
                                <RiInstagramLine />
                            </a>
                        </span>
                    </div>
                    <ul className="navbar-right-panel">
                        <li>
                            <a href="" target="_blank">
                                Vendor Login
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                Sell on Sastodeal
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                Raise A Ticket
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                Order Tracking
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="navbar-mid">
                    <div className="mid-left">
                        <img
                            className="logo"
                            src="/logo.svg"
                            alt="logo"
                            draggable={false}
                        ></img>
                    </div>
                    <div className="mid-center">
                        <IoSearchOutline />
                        <input
                            className="nav-search"
                            type="text"
                            placeholder="search entire store here..."
                            value={searchValue}
                            onChange={handleSearchChange}
                        ></input>
                    </div>
                    <div className="mid-right">
                        <a href="" target="_blank">
                            <span>Cart</span>
                            <IoCartOutline />
                        </a>
                    </div>
                </section>

                <section className="navbar-bottom">
                    {isLoggedIn ? (
                        <ul className="navbar-menu">
                            <li>
                                <a>
                                    <HiShoppingBag />
                                    <span>Bazar</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <BsTag />
                                    <span>Brand</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineStorefront />
                                    <span>Store</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineCategory />
                                    <span>Categories</span>
                                </a>
                            </li>
                            <li className="user-info">
                                <div>
                                    <span>Welcome, {userName}</span>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-menu">
                            <li>
                                <a>
                                    <HiShoppingBag />
                                    <span>Bazar</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <BsTag />
                                    <span>Brand</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineStorefront />
                                    <span>Store</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineCategory />
                                    <span>Categories</span>
                                </a>
                            </li>
                            <li className="sign">
                                <div>
                                    <a onClick={openSignInModal}>Sign In</a>
                                </div>
                                <div>
                                    <a>Sign Up</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </section>
                {isSignInModalOpen && (
                    <div className="modal-overlay" onClick={closeSignInModal}>
                        <div className="modal">
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span
                                    className="modal-close"
                                    onClick={closeSignInModal}
                                >
                                    &times;
                                </span>

                                <h2>Sign In</h2>

                                <div className="modal-option">
                                    <h3>Registered Customer</h3>
                                    <form>
                                        <span>Email</span>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <span>Password</span>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <button>Login</button>
                                        <div className="forgot-password">
                                            <a href="#">
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <div className="create-account">
                                            <a href="#">Create New Account</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="google-signin">
                                    {isLoggedIn ? (
                                        <div className="logout-btn">
                                            <button onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="google-signin">
                                            <h3>Other signin option</h3>
                                            <GoogleLogin
                                                onSuccess={handleLoginSuccess}
                                                onError={() => {
                                                    console.log("Login Failed");
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
        </nav>
    );
}

export default Navbar;
