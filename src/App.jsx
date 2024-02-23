import Navbar from "./components/navbar";
import MainContainer from "./components/MainContainer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./components/product";
import Footer from "./components/footer";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                    <Route path="/product/:productId" element={<Product />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
