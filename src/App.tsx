import reactLogo from "/assets/svg/react.svg";
import viteLogo from "/assets/svg/vite.svg";
import "./App.css";
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';

function App() {
	
	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item">
					
					<img src="/assets/img/profile-logo.png" />
				
					</a>
					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
					<a className="navbar-item">
						About
					</a>
					<a className="navbar-item">
						Resume
					</a>
					<a className="navbar-item">
						Projects
					</a>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
							More
						</a>
						<div className="navbar-dropdown">
							<a className="navbar-item">
								Social
							</a>
							<a className="navbar-item">
								Contact
							</a>
						</div>
					</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<a href="/assets/pdf/cv.pdf" download className="button is-primary">
								<span className="icon-text">
									<span className="icon">
									<Icon path={mdiDownload} title="Download CV" size={1} />
									</span>
									<span>Download CV</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
			<section className="hero section">
				<div className="columns">
					<div className="column is-one-fifth">
				<figure className="image is-fullwidth">
					<img className="is-rounded" src="/assets/img/profile-picture.jpg" />
				</figure>
				</div>
				<div className="column section">

				
				<h2 className="title is-3">
					Hi, I’m Hugo 👋
				</h2>
				<p className="subtitle">
					Welcome to my portfolio ! 
				</p>
				</div>
				</div>
			</section>
			<section className="section">
				<h2 className="title is-4">About me</h2>
				<p className="has-text-justified">
					My name's Hugo. I'm a full-stack developer. Currently, 
					as a student I'm currently studying for a Bachelor's degree in Application Design and Development in Dijon, 
					with a view to training in this field of IT. I'm interested in 💻 new technologies and 👨‍💻 computer science in general. 
					I'm passionate about 🎮 video games and their 🎨 creative fields. I'm curious by nature and 
					I want to progress in IT. I'm always looking to improve in what I do or produce in general,
					as well as being able to work independently and listen to others when I'm working in a team.
				</p>
			</section>
			<section className="section">
				<h2 className="title is-4">Resume</h2>
				<p></p>
			</section>
			<section className="section">
				<h2 className="title is-4">Projects</h2>
				<p></p>
			</section>
			<section className="section">
				<h2 className="title is-4">Social</h2>
				<p></p>
			</section>
			<section className="section">
				<h2 className="title is-4">Contact</h2>
				<p></p>
			</section>
			<footer className="footer">
			<div className="level">
				<p className="level-item">Made with 💙 by HM22-code</p>
			</div>
			<div className="level">
				<a href="https://vitejs.dev" target="_blank" className="level-item">
					<img src={viteLogo} className="image logo vite" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" className="level-item">
					<img src={reactLogo} className="image logo react" alt="React logo" />
				</a>
				<a href="https://bulma.io" className="level-item" >
					<img src="/assets/img/bulma-logo.png" className="image" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
				</a>
			</div>
			</footer>
		</div>
	);
}

export default App;
