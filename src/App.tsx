import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/scss/index.scss";
import './locales/i18n';

// App root
function App() {
    // Initialize AOS library
    useEffect(() => {
        AOS.init();
    }, [])

	return (
		<>
        {
            <div>
                <Navbar />
                <main>
                    <Home />
                </main>
                <Footer />
            </div>
        }
		</>
	);
}

export default App;
