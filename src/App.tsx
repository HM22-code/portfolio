import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        AOS.init();
    }, [])

	return (
		<>
			<Navbar />
			<Banner />
            <Social />
			<About />
			<Resume />
			<Projects />
			<Footer />	
		</>
	);
}

export default App;
