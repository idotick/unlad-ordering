const data = '[{"oid": "123123123213123","customer": "Lean Alejandro","items": [{"name": "whole rice","amount": 2},' +
																				'{"name": "½ cup rice","amount": 1},' +
																				'{"name": "beef tapa","amount": 2},' +
																				'{"name": "banana","amount": 1},' +
																				'{"name": "chuckie","amount": 1},' +
																				'{"name": "siomai","amount": 1}]},' +
			 '{"oid": "2786216723","customer": "Kyle Ramirez","items": [{"name": "whole rice","amount": 1},' +
			 																	'{"name": "cordon bleu","amount": 1},' +
			 																	'{"name": "yakult","amount": 2}]},' +
			 '{"oid": "2786216723","customer": "Nicole Herrera","items": [{"name": "whole rice","amount": 1},' +
			 																	'{"name": "½ rice","amount": 1},' +
			 																	'{"name": "corned beef","amount": 2},' +
			 																	'{"name": "butter mixed vegetables","amount": 1},' +
			 																	'{"name": "bear brand drink","amount": 1}]},' +
			 '{"oid": "2786216723","customer": "Brian Bautista","items": [{"name": "whole rice","amount": 3},' +
			 																	'{"name": "corned beef","amount": 1},' +
			 																	'{"name": "butter mixed vegetables","amount": 1},' +
			 																	'{"name": "sinigang na baboy","amount": 1},' +
			 																	'{"name": "buko juice","amount": 2},' +
			 																	'{"name": "yakult","amount": 1}]},' +
			 '{"oid": "2786216723","customer": "Ralph Datoon","items": [{"name": "whole rice","amount": 2},' +
			 																	'{"name": "sinigang","amount": 1},' +
			 																	'{"name": "vitamilk","amount": 1}]},' +
			 '{"oid": "2786216723","customer": "Krisha Gonzales","items": [{"name": "½ rice","amount": 1},' +
			 																	'{"name": "fried egg","amount": 1},' +
			 																	'{"name": "luncheon meat","amount": 2},' +
			 																	'{"name": "banana","amount": 2},' +
			 																	'{"name": "buko juice","amount": 1},' +
			 																	'{"name": "mang juan","amount": 1}]}]';

function update() {
	const main = document.getElementsByTagName('main')[0];
	const orders = JSON.parse(data);
	
	orders.forEach(async order => {
		const disp = document.createElement('article');
		const list = document.createElement('ul');

		const missing = document.getElementById('missing');
		const done = document.getElementById('done');
		const total = document.getElementById('total');

		// Add content (name, ordered items)
		disp.innerHTML = `<div>${order.customer}</div>\n`;

		(order.items).forEach(item => {
			list.innerHTML += `\t\t<li><span>${item.amount}</span> ${item.name}</li>\n`;
		});

		// Remove order on click
		disp.addEventListener('click', () => {
			missing.innerText = (parseInt(missing.innerText) - 1).toString();
			done.innerText = (parseInt(done.innerText) + 1).toString();

			disp.remove();
		});

		missing.innerText = orders.length.toString();
		total.innerText = orders.length.toString();
		
		// Display on website
		disp.appendChild(list);
		for (let i = 0; i < orders.length; i++) {
			if (orders[i] === order) {
				document.getElementById(`col${i % 5}`).appendChild(disp);
				break;
			}
		}
	});
}

// TODO: update whenever change in server
setTimeout(update, 1000);