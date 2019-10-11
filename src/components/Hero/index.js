import React from "react";
import "./hero.scss";

export default function index() {
	return (
		<section id='hero' className='section'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-half'>
						<div className='hero is-medium'>
							<div className='hero-body'>
								<h1 className='is-size-1 is-size-3-mobile'>
									Porozmawiajmy o&nbsp;aktywności szkolnej i&nbsp;edukacji.
								</h1>
								<h2 className='is-size-4-mobile'>Konferencja samorządności.</h2>
								<button className='button is-primary is-large heroButton'>
									Dowiedz się więcej
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
