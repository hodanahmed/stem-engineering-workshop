import { useState, useEffect } from "react";
import { Container, PostContainer } from "./style.js";

function App() {
	const [feedArray, setFeedArray] = useState([]);

	useEffect(() => {
		console.log(feedArray);
	});
	return (
		<Container>
			<header>
				<h1>unintitled</h1>
			</header>

			<main>
				<section>
					{feedArray.map((feedItem, i) => (
						<PostContainer>
							{/**<p key={`${i}-feedItem`}>{feedItem}</p>*/}
							{/**<img src={feedItem} />*/}
						</PostContainer>
					))}
				</section>

				<div class="ui form">
					<div class="field">
						<label>Text</label>
						<textarea rows="2"
							onBlur={(e) => {
								const newValue = e.target.value;

								setFeedArray((feedArray) => [...feedArray, newValue]);
							}}
						></textarea>
					</div>
					<input class="ui submit button" type="submit" onClick={() => {}}></input>
				</div>
			</main>
		</Container>
	);
}

export default App;
