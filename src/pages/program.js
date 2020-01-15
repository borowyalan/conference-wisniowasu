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
							<h1>Co już zrobiliśmy?</h1>
							<div className="faq-section">
								<h3>Aula Czekoladowa i galeria uzdolnionych</h3>
								<p>
									4 lata temu jedna z naszych obecnych absolwentek wpadła na
									pomysł aby na klatce schodowe odsłonić cegłę XIX-wiecznego
									budynku i zrobić tam miejsce, dla wybitnych uczniów, aby można
									było ich wyróżnić za wybitne osiągnięcia. Tak powstała galeria
									uzdolnionych. Pomysł tak się spodobał, że poszliśmy za ciosem
									i w następnym roku odnowiliśmy też aule naprzeciwko bufetu i
									zrobiliśmy z niej miejsce ładne i przyjemne, do dyspozycji
									uczniów i pracowników. Motyw cegieł stał się już w naszej
									szkole klasyczny i przy remontach odkrywane są kolejne
									fragmenty ceglanych murów.
								</p>
							</div>
							<div className="faq-section">
								<h3>WiFi</h3>
								<p>
									W związku z ubiegłorocznym sukcesem w rankingu perspektyw
									wspólnie z dyrekcją postanowiliśmy uczcić to wydarzenie
									wyjątkową imprezą. Zaproponowaliśmy dyrekcji coś w rodzaju
									mini conventu z konkursem cosplayów, strefą konsol, loterią i
									innymi atrakcjami. Wydarzenie tak się spodobało, że nawet
									nauczyciele przebierali się i bawili wraz z uczniami. To był
									dzień wspaniałej zabawy i wyjątkowej atmosfery w szkole.
								</p>
							</div>
							<div className="faq-section">
								<h3>Integracja klas pierwszych</h3>
								<p>
									Od 3 lat wspieramy coraz bardziej dyrekcję w integrowaniu
									nowoprzybyłych uczniów. Organizujemy dla nich warsztaty pracy
									zespołowej, zajęcia sportowe, oraz grę terenową w stylu
									escape-room. Opinie które słyszymy na temat tej zabawy zwykle
									są bardzo podobne. To świetne pierwsze wrażenie jakie robi
									szkoła i idealna okazja żeby w miłej atmosferze poznać ludzi
									ze swojej klasy, na co później często brakuje czasu.
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
