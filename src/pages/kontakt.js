import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"
import "./kontakt.scss"

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
								{/* <p>kontakt@wisniowasu.pl </p> */}
								{/* <p> julia.kiryluk@wisniowasu.pl</p> */}
								{/* <h3>W budowie 🛠️</h3> */}
								<article>
									<a href="mailto:julia.kiryluk@wisniowasu.pl">
										kontakt@wisniowasu.pl
									</a>
								</article>
								<hr></hr>
								<article>
									<p>
										Julia Kiryluk - Koordynatorka projektu, kontakt z podmiotami
										zewnętrznymi
									</p>

									<a href="mailto:julia.kiryluk@wisniowasu.pl">
										julia.kiryluk@wisniowasu.pl
									</a>

									<p>
										<a href="tel:+48692185105">+48692185105</a>
									</p>
								</article>
								<hr></hr>
								<article>
									<p>Jakub Bareja - Kierownik projektu</p>

									<a href="mailto:kuba.bareja@wisniowasu.pl">
										kuba.bareja@wisniowasu.pl
									</a>

									<p>
										<a href="tel:+48505538848">+48505538848</a>
									</p>
								</article>
								<hr></hr>
								<article>
									<p>
										Paweł Rogalski - Rzecznik prasowy, koordynator działu mediów
										i marketingu
									</p>
									<a href="mailto:pawel.rogalski@wisniowasu.pl">
										pawel.rogalski@wisniowasu.pl
									</a>
									<p>
										<a href="tel:+48737665988">+48737665988</a>
									</p>
								</article>
								<hr></hr>
								<article>
									<p>
										Kamila Kwaśniewska - Koordynator działu PR and Creative
										Solutions
									</p>
									<a href="mailto:kamila.kwasniewska@wisniowasu.pl">
										kamila.kwasniewska@wisniowasu.pl
									</a>
									<p>
										<a href="tel:+48531094104">+48531094104</a> (Tylko
										wiadomości tekstowe)
									</p>
								</article>
								<hr></hr>
								<article>
									<p>Jakub Mrozicki - Koordynator działu merytorycznego</p>
									<a href="mailto:jakub.mrozicki@wisniowasu.pl">
										jakub.mrozicki@wisniowasu.pl
									</a>
									<p>
										<a href="tel:+48721856456">+48721856456</a>
									</p>
								</article>
								<hr></hr>
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
