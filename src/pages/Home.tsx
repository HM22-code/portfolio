import Banner from "./home/Banner";
import About from "./home/About";
import Resume from "./home/Resume";
import Projects from "./home/Projects";
import Social from "./home/Social";

function Home() {
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

export default Home;
