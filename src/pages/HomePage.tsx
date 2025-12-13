import Banner from "./home/Banner";
import About from "./home/About";
import Resume from "./home/Resume";
import Projects from "./home/Projects";
import Social from "./home/Social";

function HomePage() {
	return (
		<>
            <Banner />
            <Social />
            <About />
            <Resume />
            <Projects />
		</>
	);
}

export default HomePage;
