import React from "react"
import "./hero.css"

export default function index() {
	return (
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-half">
						<div className="hero is-medium">
							<div className="hero-body">
								<h1 className="is-size-1 is-size-3-mobile">
									Porozmawiajmy o aktywności szkolnej i edukacji
								</h1>
								<h2 className="is-size-4-mobile">
									Lorem ipsum dolor sit amet consectetur.
								</h2>
								<button className="heroButton">Dowiedz się więcej</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
