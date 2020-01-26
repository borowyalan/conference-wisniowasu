import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import bareja from "../images/bareja.jpg"
import kuba from "../images/kuba.jpg"
import julka from "../images/julka.jpg"
import kamila from "../images/kamila.jpg"
import rogal from "../images/rogal.jpg"

import "./mystyles.scss"
import "./subpages.scss"
import "./kontakt.scss"

const Contact = () => (
	<LayoutSubpages>
		<SEO title="Kontakt" />
		<div id="contact" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-four-fifths">
							<h1>Kontakt:</h1>
							<div className="faq-section">
								{/* <p>kontakt@wisniowasu.pl </p> */}
								{/* <p> julia.kiryluk@wisniowasu.pl</p> */}
								{/* <h3>W budowie 🛠️</h3> */}
								<div id="first">
									Główny kontakt:
									<br/>
									<a href="mailto:kontakt@wisniowasu.pl">
										kontakt@wisniowasu.pl
									</a>
								</div>
								<hr></hr>
								<article>
									<img src={julka}/>
									<div>
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
									</div>
								</article>
								<hr></hr>
								<article>
									<img src={bareja}/>
									<div>
										<p>Jakub Bareja - Kierownik projektu</p>

										<a href="mailto:kuba.bareja@wisniowasu.pl">
											kuba.bareja@wisniowasu.pl
										</a>

										<p>
											<a href="tel:+48505538848">+48505538848</a>
										</p>
									</div>
								</article>
								<hr></hr>
								<article>
									<img src={rogal}/>
									<div>									
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
									</div>
								</article>
								<hr></hr>
								<article>
									<img src={kamila}/>
									<div>
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
									</div>
								</article>
								<hr></hr>
								<article>
									<img src={kuba}/>
									<div>
										<p>Jakub Mrozicki - Koordynator działu merytorycznego</p>
										<a href="mailto:jakub.mrozicki@wisniowasu.pl">
											jakub.mrozicki@wisniowasu.pl
										</a>
										<p>
											<a href="tel:+48721856456">+48721856456</a>
										</p>
									</div>
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
