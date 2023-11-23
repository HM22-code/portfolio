import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        setTimeout(() => setLoading(false), 3000);
    }, [])

	return (
		<>
        {
            loading === false ? (
            <>
                <Navbar />
                <Banner />
                <Social />
                <About />
                <Resume />
                <Projects />
                <Footer />
            </>	
            ) : (
            <Loading />
            )
        }
		</>
	);
}

export default App;
