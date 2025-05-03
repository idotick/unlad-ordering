const data = '[{"oid": "123123123213123","customer": "Lean Alejandro", "time": "06:35:16 AM",' +
																				'"items": [{"name": "whole rice","amount": 2},' +
																				'{"name": "½ cup rice","amount": 1},' +
																				'{"name": "beef tapa","amount": 2},' +
																				'{"name": "banana","amount": 1},' +
																				'{"name": "chuckie","amount": 1},' +
																				'{"name": "siomai","amount": 1}]},' +
			 '{"oid": "2786216723","customer": "Kyle Ramirez", "time": "06:43:42 AM",' +
			 																	'"items": [{"name": "whole rice","amount": 1},' +
			 																	'{"name": "cordon bleu","amount": 1},' +
			 																	'{"name": "yakult","amount": 2}]},' +
			 '{"oid": "432423342324","customer": "Nicole Herrera", "time": "09:59:33 AM",' +
			 																	'"items": [{"name": "whole rice","amount": 1},' +
			 																	'{"name": "½ rice","amount": 1},' +
			 																	'{"name": "corned beef","amount": 2},' +
			 																	'{"name": "butter mixed vegetables","amount": 1},' +
			 																	'{"name": "bear brand drink","amount": 1}]},' +
			 '{"oid": "55645656","customer": "Brian Bautista","time": "11:56:51 AM",' +
			 																	'"items": [{"name": "whole rice","amount": 3},' +
			 																	'{"name": "corned beef","amount": 1},' +
			 																	'{"name": "butter mixed vegetables","amount": 1},' +
			 																	'{"name": "sinigang na baboy","amount": 1},' +
			 																	'{"name": "buko juice","amount": 2},' +
			 																	'{"name": "yakult","amount": 1}]},' +
			 '{"oid": "44565","customer": "Ralph Datoon","time": "4:09:17 PM",' +
			 																	'"items": [{"name": "whole rice","amount": 2},' +
			 																	'{"name": "sinigang","amount": 1},' +
			 																	'{"name": "vitamilk","amount": 1}]},' +
			 '{"oid": "654557457","customer": "Krisha Gonzales","time": "06:37:52 AM",' +
			 																	'"items": [{"name": "½ rice","amount": 1},' +
			 																	'{"name": "fried egg","amount": 1},' +
			 																	'{"name": "luncheon meat","amount": 2},' +
			 																	'{"name": "banana","amount": 2},' +
			 																	'{"name": "buko juice","amount": 1},' +
			 																	'{"name": "mang juan","amount": 1}]}]';

function update() {
	const orders = JSON.parse(data);
	console.log('updating order list...');

	orders.forEach(async order => {
		// Ensure the same order does not appear when updating (can be removed if ever)
		const element = document.getElementById(`${order.oid}`);
		if (element) {
			console.warn(`order ${order.oid} is already displayed, continuing...`);
			return;
		}

		// Create elements
		const disp = document.createElement('article');
		const list = document.createElement('ul');

		// Get order number tracker
		const missing = document.getElementById('missing');
		const done = document.getElementById('done');
		const total = document.getElementById('total');

		// Add content (name, ordered items)
		disp.innerHTML = `<div>${order.customer}<br><span id="time">${order.time}</span></div>\n`;

		(order.items).forEach(item => {
			list.innerHTML += `\t\t<li><span>${item.amount}</span> <p>${item.name}</p></li>\n`;
		});

		// Track order
		disp.setAttribute('id', `${order.oid}`);

		// Remove order on click
		disp.addEventListener('click', () => {
			missing.innerText = (parseInt(missing.innerText) - 1).toString();
			done.innerText = (parseInt(done.innerText) + 1).toString();

			disp.style.display = 'none';
		});

		missing.innerText = orders.length.toString();
		total.innerText = orders.length.toString();
		
		// Display on website
		disp.appendChild(list);
		for (let i = 0; i < orders.length; i++) {
			if (orders[i] != order) {
				continue;
			}

			const colNum = i % 5;
			const column = document.getElementById(`col${colNum}`);

			column.appendChild(disp);
		}
	});

	console.log('complete!');
}

// TODO: update whenever change in server
setInterval(update, 5000);