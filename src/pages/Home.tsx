import Banner from "./home/Banner";
import About from "./home/About";
import Projects from "./home/Projects";
import Social from "./home/Social";

// Home page
function Home() {
	return (
		<div>
            <Banner />
            <Social />
            <About />
            <Projects />
		</div>
	);
}

export default Home;
