import React from "react"
import "./hero.scss"
import { Link } from "gatsby"

export default function index() {
	return (
		<section id="hero" className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-half">
						<div className="hero is-medium">
							<div className="hero-body">
								<h1 className="is-size-1 is-size-2-mobile">
									Porozmawiajmy o&nbsp;aktywności szkolnej i&nbsp;edukacji.
								</h1>
								<h2 className="is-size-4-mobile">Konferencja samorządności.</h2>
								<Link
									className="button is-primary is-large heroButton"
									to="/o-nas"
								>
									Dowiedz się więcej
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
