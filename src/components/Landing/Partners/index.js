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
	  }
	`}
    render={data => (
		<section id="partners" className="section">
			<div className="container">
				<h2 class="title is- has-text-centered">Partnerzy wydarzenia:</h2>
				<div className="partners">
					<Img className="invert" fixed={data.alternatywa.childImageSharp.fixed}/>
					<Img fixed={data.civis.childImageSharp.fixed}/>
					<Img fixed={data.idexx.childImageSharp.fixed}/>
					<Img fixed={data.oirp.childImageSharp.fixed}/>
					<Img fixed={data.propergate.childImageSharp.fixed}/>
					<Img fixed={data.sh.childImageSharp.fixed}/>
					<Img fixed={data.wawa.childImageSharp.fixed}/>
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
