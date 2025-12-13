import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/scss/index.scss";
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
                <main>
                    <HomePage />
                </main>
                <Footer />
            </>
        }
		</>
	);
}

export default App;
