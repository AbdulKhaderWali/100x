document.addEventListener("DOMContentLoaded", function () {
	const tweetForm = document.getElementById("tweetForm");
	const tweetText = document.getElementById("tweetText");
	const responseDiv = document.getElementById("response");
	tweetForm.addEventListener("submit", async function (event) {
		event.preventDefault();
		const tweet = tweetText.value;
		const url = "https://one00x-data-analysis.onrender.com/posts";
		const postTweet = { post: { content: tweet } };
		// Make an HTTP POST request to the backend

		// Made use of try catch and async await for better handling of promises
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(postTweet),
				// Uncomment below code to simulate an error
				// body: JSON.stringify({ tweet }),
			});
			if (response.ok) {
				const data = await response.json();
				responseDiv.innerText = `Tweet posted successfully! Tweet ID: ${data.id}`;
			} else {
				throw new Error("Tweet Posting Failed");
			}
		} catch (error) {
			responseDiv.innerText = error;
		}
	});
});
