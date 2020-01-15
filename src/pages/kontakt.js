import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"

const Contact = () => (
	<LayoutSubpages>
		<SEO title="O nas" />
		<div id="contact" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>Kontakt:</h1>
							<div className="faq-section">
								<p>kontakt@wisniowasu.pl </p>
								<p> julia.kiryluk@wisniowasu.pl</p>
								<h3>W budowie 🛠️</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="columns">
					<div className="column is-half"></div>
				</div>
			</div>
		</div>
	</LayoutSubpages>
)

export default Contact
