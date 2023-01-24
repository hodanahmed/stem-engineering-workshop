import { useState, useEffect } from "react";
import { Container, PostContainer, IconPostContainer } from "./style.js";
import { format } from 'date-fns';
import { TiMessage } from 'react-icons/ti';

function App() {
	const [feedArray, setFeedArray] = useState([]);

	useEffect(() => {
		console.log(feedArray);
	});

	const handleChange = (e) => {
		const date = format(new Date(), 'h:mmaaa')
		const newValue = {value: e.target.value, date: date}

			setFeedArray((feedArray) => [...feedArray, newValue]);
			e.target.value = ''
		};

	return (
		<Container>
			<header>
				<h1>STEM Workshop</h1>
			</header>

			<main>
				<section>
					{feedArray.map((feedItem, i) => {
						return (
						<PostContainer>
							<IconPostContainer>
							<TiMessage/>
							<p style={{ paddingLeft: '4px'}}key={`${i}-feedItem`}>{feedItem.value}</p>
							</IconPostContainer>
							<span style={{ fontSize: '10px'}}>{feedItem.date}</span>
						</PostContainer>
					)})}
				</section>

				<div class="ui form">
					<div class="field">
						<label>Text</label>
						<textarea rows="2"
							onBlur={(e) => {
								const date = format(new Date(), 'h:mmaaa')
								const newValue = {value: e.target.value, date: date}

								setFeedArray((feedArray) => [...feedArray, newValue]);
								e.target.value = ''
							}}
						></textarea>
					</div>
					<input class="ui submit button" type="submit" onChange={handleChange}></input>
				</div>
			</main>
		</Container>
	);
}

export default App;
