const form = document.getElementById("login_form");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const formData = await new FormData(form);
	
	try {
		const res = await fetch('https://server1.tail809696.ts.net/api/v1/auth/login', {
			method: 'GET',
		});
		const json = await res.json();
		

		if (!res.ok) {
			console.log(json.description);
			return;
		}

		const data = json.data;
		let userFound = false;

		data.forEach(user => {
			if (user.email === formData.get('email')) {
				// TO-DO: also check password but current api data has none
				console.log(`welcome back, ${user.first_name}!`);
				userFound = true;
			}
		});

		if (!userFound) {
			console.log(`incorrect password/invalid email`);
		}
	} catch (err) {
		console.error(err);
	}
});