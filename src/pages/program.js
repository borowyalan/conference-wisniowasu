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
							<div className="program_container">
								<div className="program_timespan_text one">
									8.30 - 9.00
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Rejestracja
									</div>
								</div>
								<div className="program_timespan_text one">
									9.00 - 9.30
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Oficjalne rozpoczęcie konferencji
									</div>
								</div>
								<div className="program_timespan_text three">
									9.40 - 10.45
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Panele dyskusyjne:
									</div>
									<div className="program_option">
										<strong>Szkoła przyszłości</strong><br/>
										jak widzimy szkołę za X lat? Jakie formy i metody pracy można stosować, by uatrakcyjnić proces nauczania? Jakie są inne warianty edukacji, których do tej pory nie braliśmy pod uwagę? (Liceum w Chmurze).
									</div>
									<div className="program_option">
										<strong>Kryzys klimatyczny</strong><br/>
										z jakimi problemami przyjdzie się zmierzyć światu i nam – obywatelom? co jako uczniowie możemy zrobić, aby spowalniać proces zmian klimatycznych? (we współpracy z Młodzieżowym Strajkiem Klimatycznym).
									</div>
									<div className="program_option">
										<strong>Internet trzepakiem XXI wieku</strong><br/>
										czyli jaki wpływ na człowieka ma wypieranie spotkań towarzyskich przez media społecznościowe i w jaki sposób ewoluują media.
									</div>
									<div className="program_option">
										<strong>Szkoła Impro</strong><br/>
										zajęcia dla niezdecydowanych, metody aktywizacji poprzez improwizację i sztukę.
									</div>
								</div>
								<div className="program_timespan_text four">
									10.50 - 11.20
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Przerwa kawowa
									</div>
								</div>
								<div className="program_timespan_text three">
									11.25 - 12.55
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Warsztaty:
									</div>
									<div className="program_option">
										<strong>Jak być liderem, a może przywódcą zespołu współpracowników?</strong><br/>
									</div>
									<div className="program_option">
										<strong>Wykorzystywanie mediów społecznościowych w pracy SU.</strong><br/>
									</div>
									<div className="program_option">
										<strong>Wybory na przewodniczącego SU i prowadzenie kampanii wyborczej</strong><br/>
										przykłady kampanii wyborczych, jak powinna wyglądać, jakich błędów unikać, na jakie niebezpieczeństwa trzeba być gotowym, jak dobrze przygotować się do kampanii (sekcja prawna SU we współpracy z fundacją Civis Polonus).
									</div>
									<div className="program_option">
										<strong>Technologia w służbie SU</strong><br/>
										narzędzia i metody pracy z wykorzystaniem technik, z których na co dzień korzystamy w życiu szkolnym (sekcja techniczna SU).
									</div>
									<div className="program_option">
										<strong>Organizacja pracy SU w szkole</strong><br/>
										jak sprawnie zarządzać ludźmi tak, aby zwyczajnie wszystko działało (sekcja organizacyjna SU we współpracy z Centrum Komunikacji Społecznej).
									</div>
									<div className="program_option">
										<strong>Krok pierwszy - jak rozkręcić SU?</strong><br/>
										pierwsze kroki, rozmowa z publicznością na temat problemów w zarządzaniu samorządem, jak budować relacje z dorosłymi - nauczycielami, dyrekcją, rodzicami? (we współpracy z absolwentem szkoły)
									</div>
									<div className="program_option">
										<strong>Realne zmiany w szkole dzięki SU</strong><br/>
										wymiana doświadczeń między samorządem z Wiśniowej a zaproszonymi przedstawicielami samorządów innych szkół warszawskich, przestrzeń do dyskusji dla młodzieży (nasze osiągnięcia).
									</div>
									<div className="program_option">
										<strong>Warsztaty dla opiekunów SU (we współpracy z fundacją Civis Polonus)</strong>
									</div>
								</div>
								<div className="program_timespan_text one">
									13.00 - 13.30
								</div>
								<div className="program_timespan_content">
									<div className="program_option program_topic">
										Podsumowanie konferencji
									</div>
								</div>
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

export default program
