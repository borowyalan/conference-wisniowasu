import React from "react"
import "./form.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { FaUser } from "react-icons/fa"

export default function index({ isModalOpen }) {
	const handleSubmit = e => {
		e.preventDefault()
		let form = {
			name,
			email,
			title,
			message,
		}

		form.name = e.target.name.value
		form.email = e.target.email.value
		form.title = e.target.title.value
		form.message = e.target.message.value

		console.log(form)
		console.log(JSON.stringify(form))

		fetch("https://api.wisniowasu.pl/mailer/sendmail", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		})
			.then(json => console.log(json))
			.then(data => console.log(data))
	}

	return (
		<section id="form" className="section">
			<form className="form-horizontal" onSubmit={handleSubmit}>
				<fieldset className="box">
					<legend>Kontakt</legend>

					{/* Example */}
					{/* <div className="field">
						<label className="label">Username</label>
						<div className="control has-icons-left has-icons-right">
							<input
								className="input is-success"
								type="text"
								placeholder="Text input"
								value="bulma"
							/>
							<span className="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faUser} />
								</i>
							</span>
							<span className="icon is-small is-right">
								<i className="fas fa-check"></i>
							</span>
						</div>
						<p className="help is-success">This username is available</p>
					</div> */}

					{/* Name */}
					<div className="field">
						<label className="label" htmlFor="name">
							Imię i Nazwisko
						</label>
						<div className="control has-icons-left">
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Jan Kowalski"
								className="input"
								required=""
							/>
							<span className="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faUser} />
								</i>
							</span>
						</div>
					</div>

					{/* E-mail */}
					<div className="field">
						<label className="label" htmlFor="email">
							Adres e-mail
						</label>
						<div className="control has-icons-left">
							<input
								id="email"
								name="email"
								type="text"
								placeholder="jankowalski@yahoo.com"
								className="input"
								required=""
							/>
							<span className="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
							</span>
						</div>
					</div>

					{/* Title */}
					<i className="field">
						<label className="label" htmlFor="title">
							Tytuł wiadomości
						</label>
						<i className="control has-icons-left">
							<input
								id="title"
								name="title"
								type="text"
								placeholder="Tytuł"
								className="input"
								required=""
							/>
							<span className="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
							</span>
						</i>
					</i>

					{/* Message */}
					<div className="field">
						<label className="label" htmlFor="message">
							Wiadomość
						</label>
						<div className="control">
							<textarea
								className="textarea"
								id="message"
								name="message"
								placeholder="..."
							></textarea>
						</div>
					</div>

					{/* Submit Button */}
					<div className="field">
						<label className="label" htmlFor="submit"></label>
						<div className="control">
							<button
								id="submit"
								name="submit"
								className="button is-success"
								onClick={() => isModalOpen(true)}
							>
								Wyślij
							</button>
						</div>
					</div>
				</fieldset>
			</form>
		</section>
	)
}
