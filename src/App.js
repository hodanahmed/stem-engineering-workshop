import { Container } from "./style.js";
import { useState, useEffect } from "react";

function App() {
	const [feed, setFeed] = useState();
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
						<p key={`${i}-feedItem`}>{feedItem}</p>
					))}
				</section>
				<textarea
					onBlur={(e) => {
						const newValue = e.target.value;

						setFeedArray((feedArray) => [...feedArray, newValue]);
					}}
				></textarea>
				<input type="submit" value="Post" onClick={() => {}}></input>
			</main>
		</Container>
	);
}

export default App;
