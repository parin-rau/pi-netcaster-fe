const parseSpaces = (str) => str.split("_").join(" ");

const createAudioComponent = (streams, parentEl, index = 0) => {
	const [streamUrl, streamTitle] = streams;

	const div = document.createElement("div");
	div.setAttribute("id", `stream-${index}`);

	const audio = document.createElement("audio");
	audio.setAttribute("controls", true);
	audio.setAttribute("type", "audio/mpeg");

	const title = document.createElement("h2");
	title.innerText = parseSpaces(streamTitle);

	const source = document.createElement("source");
	source.setAttribute("src", streamUrl);

	audio.appendChild(source);

	div.appendChild(title);
	div.appendChild(audio);

	parentEl.appendChild(div);
};

const getData = (() => {
	const getStreams = async (parentId) => {
		const parentEl = document.getElementById(parentId);
		const res = await fetch("/api/streams");
		if (!res.ok) return;

		const streams = await res.json();

		if (!Array.isArray(streams)) {
			createAudioComponent(streams, parentEl);
		} else {
			streams.forEach((s, i) => createAudioComponent(s, parentEl, i));
		}
	};

	return { getStreams };
})();

await getData.getStreams("stream-container");
