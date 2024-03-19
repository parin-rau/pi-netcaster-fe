const getBackendUrl = async (parentId) => {
	const res = await fetch("/api/backend");
	if (!res.ok) return console.log("Unable to retrieve backend URL");

	const url = await res.json();

	const a = document.createElement("a");
	a.setAttribute("href", url);
	a.classList.add("p-2", "rounded-md", "hover:bg-neutral-700");
	a.innerText = "Icecast Server Home";

	const parentEl = document.getElementById(parentId);
	parentEl.appendChild(a);
};

await getBackendUrl("button-container");
