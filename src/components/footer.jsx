import "./footer.css";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <section className="footer-columns-container">
                    <div>
                        <h3>Contact us</h3>
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    Customer Care
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Return and Return Policy
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Raise a ticket
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Sastodeal</h3>
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Careers @ SD
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Advertise on SD
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Sell on SD
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            For better Shopping experience Download Sastodeal
                            app
                        </h3>
                        <img
                            src="https://www.sastodeal.com/media/search/footer_qr_app.png"
                            alt="sastodeal-qr"
                            draggable={false}
                        />
                    </div>
                </section>
                <section>
                    <p className="footer-location">
                        Sastodeal Pvt. Ltd. Pandol Marga, Lazimpat, Kathmandu
                    </p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
