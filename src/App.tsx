import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.scss";
import './locales/i18n';

function App() {
    // Initialize AOS library
    useEffect(() => {
        AOS.init();
    }, [])

	return (
		<>
        {
            <>
                <Navbar />
                <>
                    <Banner />
                    <Social />
                    <About />
                    <Resume />
                    <Projects />
                </>
                <Footer />
            </>
        }
		</>
	);
}

export default App;
