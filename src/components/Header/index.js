import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

import "../../pages/mystyles.scss"
import "./header.scss"
import Helmet from "react-helmet"
import Script from "react-inline-script"
import "../../modules/eventbrite"

function Header({ siteTitle }) {
	const [isActive, setBurgerActive] = useState(false)
	var exampleCallback = function() {
		console.log('Order complete!');
	};
  
	window.EBWidgets.createWidget({
		widgetType: 'checkout',
		eventId: '90880866117',
		modal: true,
		modalTriggerElementId: 'eventbrite-widget-modal-trigger-90880866117',
		onOrderComplete: exampleCallback
	});

	return (
		<section id="header" className="section">
			<div className="container">
				<header className="header">
					<nav className="navbar">
						<div className="navbar-brand">
							<Link className="navbar-item" to="/">
								<img src={logo} alt="Conferention logo" />
							</Link>
							<a
								className={`navbar-burger burger ${
									isActive ? "is-active" : ""
								}`}
								onClick={() =>
									setBurgerActive(prevBurgerActive => !prevBurgerActive)
								}
							>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</a>
						</div>
						<div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
							<div className="navbar-start">
								<Link to="/o-nas" className="navbar-item">
									O nas
								</Link>
								<button id="eventbrite-widget-modal-trigger-90880866117" type="button">Buy Tickets</button>
								<Link to="/program" className="navbar-item">
									Program
								</Link>
								<Link to="/faq" className="navbar-item">
									FAQ
								</Link>
								<Link to="/kontakt" className="navbar-item">
									Kontakt
								</Link>
							</div>
						</div>
					</nav>
				</header>
			</div>
		</section>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
