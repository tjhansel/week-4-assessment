const complimentBtn = document.getElementById("complimentButton")

function generateRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	document.getElementById("color").style.backgroundColor = color;
}

function getFortune() {
	const name = document.getElementById("name").value;
	axios.get("http://localhost:4000/api/fortunes/")
		.then(response => {
			const data = response.data.slips;
			const randomIndex = Math.floor(Math.random() * data.length);
			const fortune = data[randomIndex].advice;
			document.getElementById("fortune").innerText = fortune;
		})
		.catch(error => {
			console.log(error);
		});
}

function addFortune() {
	const newFortune = document.getElementById("new-fortune").value;
	axios.post("http://localhost:4000/api/fortunes/", {
		fortune: newFortune
	})
	.then(response => {
		const li = document.createElement("li");
		li.innerText = newFortune;
		document.getElementById("fortune-list").appendChild(li);
	})
	.catch(error => {
		console.log(error);
	});
}

function submitName(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    axios.post('api/name', { name })
        .then(response => {
            const message = `Welcome, ${response.data.name}!`;
            const welcome = document.createElement('p');
            welcome.textContent = message;
            document.body.insertBefore(welcome, document.body.firstChild);
        })
        .catch(error => {
            console.error(error);
        });
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            const compliment = document.createElement(`h3`)
            compliment.textContent = data
            complimentDiv.appendChild(compliment)
    });
};

complimentBtn.addEventListener('click', getCompliment)