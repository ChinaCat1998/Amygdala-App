import '../App.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2"
import Nav from "../components/Nav"
// import Nav from "../components/Nav";



function HomePage () {
    return (
        <div className="welcome-wrap">
            <Header />
            <Nav2 />
            <h1>
                Welcome to Amygdala!
            </h1>
            <h2>
                We are happy you are here!
            </h2>
            <Nav />
            <Footer />
        </div>
    )
}

export default HomePage;