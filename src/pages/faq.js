import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"

const FAQPage = () => (
	<LayoutSubpages>
		<SEO title="FAQ" />
		<div id="faq" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>FAQ</h1>
							<div className="faq-section">
								<h3>Jak wygląda rejestracja? Czy jest płatna?</h3>
								<p>
								• Rejestracja planowana jest do 28 lutego, bądź do czasu zgłoszenia się 30 szkół  
								<br/>
								• Zarówno rejestracja, jak i udział w konferencji są BEZPŁATNE i wymagają jedynie chęci do działania 🙂
								<br/>
								• Zarejestrować się można poprzez formularz dostępny w menu
								</p>
							</div>
							<div className="faq-section">
								<h3>Jakie są warunki rejestracji?</h3>
								<p>
								• Zgłosić się mogą jedynie szkoły ponadpodstawowe
								<br/>
								• Ograniczenie co do ilości osób to 3 osoby działające w samorządzie uczniowskim + opiekun SU + ewentualnie członek dyrekcji
								<br/>
								• Należy przynieść ze sobą jedynie dużo entuzjazmu
								</p>
							</div>
							<div className="faq-section">
								<h3>Jak długo należy czekać na odpowiedź na zgłoszenie?</h3>
								<p>
								Bilety otrzymasz natychmiast, lecz zastrzegamy sobie prawo do anulowania biletu w przypadku np. fake'owych danych podanych podczas rejestracji lub np. w przypadku zgłoszenia szkoły, która nie spełnia warunków rejestracji
								</p>
							</div>
							<div className="faq-section">
								<h3>Czy wszyscy zgłoszeni z jednej szkoły muszą zapisać się na ten sam panel?</h3>
								<p>
								Każda zgłoszona osoba zapisuję się na warsztaty według indywidualnych preferencji
								</p>
							</div>
							<div className="faq-section">
								<h3>Jak dojechać na miejsce Konferencji?</h3>
								<p>
								Szkoła znajduje się przy ul. Wiśniowej 56, w pobliżu stacji metra Pole Mokotowskie oraz przystanku autobusowego Wiśniowa.
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
