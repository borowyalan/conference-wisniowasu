import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import logo_title from "../../images/logo_title.png"

import "../../pages/mystyles.scss"
import "./footer.scss"

function Footer({ siteTitle }) {
	const [isActive, setBurgerActive] = useState(false)
	return (
		<footer id="footer" className="footer">
			<div className="content">
				<div className="columns">
					<div className="column is-half">
						<ul>
							<li>
								<a href="https://wisniowasu.pl">Strona SU</a>
							</li>
							<li>
								<a href="https://www.facebook.com/wisniowa56/">Facebook</a>
							</li>
							<hr></hr>
							<li>
								Author: <a href="https://borowyalan.com">Borowy Alan</a>
							</li>
							<li>
								Got any feedback? Contact me via:{" "}
								<a href="mailto:borowyalan@gmail.com">borowyalan@gmail.com</a>
							</li>
						</ul>
					</div>
					<div className="column is-half second-column">
						<ul>
						<li className="poweredby">
								<span>powered by</span>
								<a href="https://wisniowasu.pl" target="_blank"><
									img className="logo" src={logo_title}/>
								</a>
							</li>
							<hr className="second-divider"></hr>
							<li>
								Icons made by{" "}
								<a
									href="https://www.flaticon.com/authors/freepik"
									title="Freepik"
								>
									Freepik
								</a>
								{`, `}
								<a
									href="https://www.flaticon.com/authors/freepik"
									title="Freepik"
								>
									Pixel Perfect
								</a>{" "}
								from{" "}
								<a href="https://www.flaticon.com/" title="Flaticon">
									{" "}
									www.flaticon.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
