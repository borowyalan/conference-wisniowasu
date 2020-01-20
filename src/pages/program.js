import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"
import "./program.scss"

const program = () => (
	<LayoutSubpages>
		<SEO title="Program" />
		<div id="program" className="section">
			<div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>Program konferencji Samorządów Warszawskich P.ASJE</h1>
							<h4>(Porozmawiajmy o Aktywności Społecznej i Edukacji) :</h4>
							<h3>04.03.2019 r.</h3>
							<ul>
								<li className="time">
									<strong>9.00-9.30</strong> – Przywitanie gości, oficjalne
									rozpoczęcie konferencji
								</li>
								<li className="time">
									<strong>9.40-10.45</strong> – Panele dyskusyjne:
									<ol>
										<li>
											<strong>“Szkoła przyszłości”</strong> - jak widzimy szkołę
											za X lat? Jakie formy i metody pracy można stosować, by
											uatrakcyjnić proces nauczania? Jakie są inne warianty
											edukacji, których do tej pory nie braliśmy pod uwagę?
											(Liceum w Chmurze).
										</li>
										<li>
											<strong>“Kryzys klimatyczny”</strong> - z jakimi
											problemami przyjdzie się zmierzyć światu i nam –
											obywatelom? co jako uczniowie możemy zrobić, aby
											spowalniać proces zmian klimatycznych? (we współpracy z
											Młodzieżowym Strajkiem Klimatycznym).
										</li>
										<li>
											<strong>„Internet trzepakiem XXI wieku”</strong> – czyli
											jaki wpływ na człowieka ma wypieranie spotkań towarzyskich
											przez media społecznościowe i w jaki sposób ewoluują media
											(fundacja Nowy Głos).
										</li>
										<li>
											<strong>Szkoła Impro</strong> - zajęcia dla
											niezdecydowanych, metody aktywizacji poprzez improwizację
											i sztukę.
										</li>
									</ol>
								</li>
								<li className="time">
									<strong>10.50-11.20</strong> – Przerwa kawowa
								</li>
								<li className="time">
									<strong>11.25-12.55</strong> – Warsztaty:
								</li>
								<ol>
									<li>
										<strong>
											Jak być liderem, a może przywódcą zespołu
											współpracowników?
										</strong>
									</li>
									<li>
										<strong>
											Wykorzystywanie mediów społecznościowych w pracy SU.
										</strong>
									</li>
									<li>
										<strong>
											Wybory na przewodniczącego SU i prowadzenie kampanii
											wyborczej
										</strong>{" "}
										- przykłady kampanii wyborczych, jak powinna wyglądać,
										jakich błędów unikać, na jakie niebezpieczeństwa trzeba być
										gotowym, jak dobrze przygotować się do kampanii (sekcja
										prawna SU we współpracy z fundacją Civis Polonus).
									</li>
									<li>
										<strong>Technologia w służbie SU</strong>– narzędzia i
										metody pracy z wykorzystaniem technik, z których na co dzień
										korzystamy w życiu szkolnym (sekcja techniczna SU).
									</li>
									<li>
										<strong>Organizacja pracy SU w szkole</strong> – jak
										sprawnie zarządzać ludźmi tak, aby zwyczajnie wszystko
										działało (sekcja organizacyjna SU we współpracy z Centrum
										Komunikacji Społecznej).
									</li>
									<li>
										<strong>Krok pierwszy - jak rozkręcić SU?</strong> -
										pierwsze kroki, rozmowa z publicznością na temat problemów w
										zarządzaniu samorządem, jak budować relacje z dorosłymi -
										nauczycielami, dyrekcją, rodzicami? (we współpracy z
										absolwentem szkoły)
									</li>
									<li>
										<strong>Realne zmiany w szkole dzięki SU</strong> – wymiana
										doświadczeń między samorządem z Wiśniowej a zaproszonymi
										przedstawicielami samorządów innych szkół warszawskich,
										przestrzeń do dyskusji dla młodzieży (nasze osiągnięcia).
									</li>
									<li>
										<strong>Warsztaty dla opiekunów SU</strong> (we współpracy z
										fundacją Civis Polonus).
									</li>
								</ol>
								<li className="time">
									<strong>13.00</strong> – Podsumowanie konferencji
								</li>
							</ul>
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

export default program
