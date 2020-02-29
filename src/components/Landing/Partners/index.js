import React from "react"
import "./partners.scss"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default () => (
	<StaticQuery
    query={graphql`
	query {
		civis: file(relativePath: { eq: "partners/civis.jpg" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		idexx: file(relativePath: { eq: "partners/idexx.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		sh: file(relativePath: { eq: "partners/sh.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		oirp: file(relativePath: { eq: "partners/oirp.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		propergate: file(relativePath: { eq: "partners/propergate.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		wawa: file(relativePath: { eq: "partners/wawa.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		alternatywa: file(relativePath: { eq: "partners/alternatywa.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		chmura: file(relativePath: { eq: "partners/chmura.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		cod: file(relativePath: { eq: "partners/cod.jpg" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		im: file(relativePath: { eq: "partners/im.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		impro: file(relativePath: { eq: "partners/impro.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		kongresy: file(relativePath: { eq: "partners/kongresy.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		sdz: file(relativePath: { eq: "partners/sdz.jpg" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		zhr: file(relativePath: { eq: "partners/zhr.jpg" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
		zww: file(relativePath: { eq: "partners/zww.png" }) {
			childImageSharp {
				fixed(height: 80, quality: 100) {
					...GatsbyImageSharpFixed
			  	}
			}
		}
	  }
	`}
    render={data => (
		<section id="partners" className="section">
			<div className="container">
				<h2 class="title is- has-text-centered">Patroni:</h2>
				<div className="partners">
					<Img fixed={data.oirp.childImageSharp.fixed}/>
					<Img fixed={data.wawa.childImageSharp.fixed}/>
				</div>
				<h2 class="title is- has-text-centered">Patroni medialni:</h2>
				<div className="partners">
					<Img className="invert" fixed={data.alternatywa.childImageSharp.fixed}/>
					<Img fixed={data.kongresy.childImageSharp.fixed}/>
				</div>
				<h2 class="title is- has-text-centered">Sponsorzy:</h2>
				<div className="partners">
					<Img fixed={data.idexx.childImageSharp.fixed}/>
					<Img fixed={data.sh.childImageSharp.fixed}/>
					<Img fixed={data.cod.childImageSharp.fixed}/>
					<Img fixed={data.im.childImageSharp.fixed}/>
					<Img fixed={data.zhr.childImageSharp.fixed}/>
					<Img fixed={data.zww.childImageSharp.fixed}/>
				</div>
				<h2 class="title is- has-text-centered">Partnerzy:</h2>
				<div className="partners">
					<Img fixed={data.civis.childImageSharp.fixed}/>
					<Img fixed={data.propergate.childImageSharp.fixed}/>
					<Img fixed={data.chmura.childImageSharp.fixed}/>
					<Img fixed={data.impro.childImageSharp.fixed}/>
					<Img fixed={data.sdz.childImageSharp.fixed}/>
					<Img fixed={data.zww.childImageSharp.fixed}/>
				</div>
			</div>
		</section>
    )}/>
  )

// export default function index() {
// 	return (
// 		<section id="partners" className="section">
// 			<div className="container">
// 				<img key={index} src={image} alt="info"></img>
// 			</div>
// 		</section>
// 	)
// }
