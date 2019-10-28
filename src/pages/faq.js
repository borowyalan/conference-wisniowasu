import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"

const FAQPage = () => (
	<LayoutSubpages>
		<SEO title="O nas" />
		<div id="faq" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>FAQ</h1>
							<div className="faq-section">
								<h3>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
								</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
								</p>
							</div>
							<div className="faq-section">
								<h3>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
								</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
								</p>
							</div>
							<div className="faq-section">
								<h3>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
								</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Officiis atque officia culpa natus voluptatibus?
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

export default FAQPage
