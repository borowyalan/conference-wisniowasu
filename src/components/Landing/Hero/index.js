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
									Porozmawiajmy o&nbsp;aktywności społecznej i&nbsp;edukacji.
								</h1>
								<h2 className="is-size-4-mobile">Konferencja Samorządów Warszawskich</h2>
								<h3>04.03.2020 r.</h3>
								<a
									className="button is-primary is-large heroButton"
									href="https://konferencja2020.eventbrite.com"
								>
									Zarejestruj się
								</a>
								<br/>
								<a
									className="button is-white is-medium linkButton"
									target="_blank" href="https://links.wisniowasu.pl/pasje2020yt"
								>
									Zobacz film
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
