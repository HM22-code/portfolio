import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="https://bulma.io">
						<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
					</a>
					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
			</nav>
			<section className="hero section">
				<h1 className="title">
					Hello World
				</h1>
				<p className="subtitle">
					My first website with <strong>Bulma</strong>!
				</p>
			</section>
			<section className="section">
				<div className="columns">
					<a href="https://vitejs.dev" target="_blank" className="column">
						<img src={viteLogo} className="image is-fullwidth logo vite" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" className="column">
						<img src={reactLogo} className="image is-fullwidth logo react" alt="React logo" />
					</a>
				</div>
			</section>
			<footer className="footer">
				<h1 className="block title">Vite + React</h1>
				<button className="block button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p className="block">
					Edit <code className="tag">src/App.tsx</code> and save to test HMR
				</p>
				<p className="block read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</footer>
		</div>
	);
}

export default App;
