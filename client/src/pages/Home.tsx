import '../App.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Nav from "../components/Nav"
// import Nav from "../components/Nav";



function HomePage () {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Footer />
        </div>
    )
}

export default HomePage;