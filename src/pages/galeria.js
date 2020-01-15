import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"

const galeria = () => (
	<LayoutSubpages>
		<SEO title="O nas" />
		<div id="gallery" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>Galeria:</h1>
							<div className="faq-section">
								<h3>W budowie 🛠️</h3>
								<p>
								</p>
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

export default galeria
