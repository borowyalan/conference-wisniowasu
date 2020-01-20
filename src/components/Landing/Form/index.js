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
			<form class="form-horizontal" onSubmit={handleSubmit}>
				<fieldset class="box">
					<legend>Kontakt</legend>

					{/* Example */}
					{/* <div class="field">
						<label class="label">Username</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-success"
								type="text"
								placeholder="Text input"
								value="bulma"
							/>
							<span class="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faUser} />
								</i>
							</span>
							<span class="icon is-small is-right">
								<i class="fas fa-check"></i>
							</span>
						</div>
						<p class="help is-success">This username is available</p>
					</div> */}

					{/* Name */}
					<div class="field">
						<label class="label" for="name">
							Imię i Nazwisko
						</label>
						<div class="control has-icons-left">
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Jan Kowalski"
								class="input"
								required=""
							/>
							<span class="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faUser} />
								</i>
							</span>
						</div>
					</div>

					{/* E-mail */}
					<div class="field">
						<label class="label" for="email">
							Adres e-mail
						</label>
						<div class="control has-icons-left">
							<input
								id="email"
								name="email"
								type="text"
								placeholder="jankowalski@yahoo.com"
								class="input"
								required=""
							/>
							<span class="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
							</span>
						</div>
					</div>

					{/* Title */}
					<i class="field">
						<label class="label" for="title">
							Tytuł wiadomości
						</label>
						<i class="control has-icons-left">
							<input
								id="title"
								name="title"
								type="text"
								placeholder="Tytuł"
								class="input"
								required=""
							/>
							<span class="icon is-small is-left">
								<i>
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
							</span>
						</i>
					</i>

					{/* Message */}
					<div class="field">
						<label class="label" for="message">
							Wiadomość
						</label>
						<div class="control">
							<textarea
								class="textarea"
								id="message"
								name="message"
								placeholder="..."
							></textarea>
						</div>
					</div>

					{/* Submit Button */}
					<div class="field">
						<label class="label" for="submit"></label>
						<div class="control">
							<button
								id="submit"
								name="submit"
								class="button is-success"
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
