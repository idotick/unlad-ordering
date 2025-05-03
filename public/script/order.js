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

		// Add content (name, ordered items)
		disp.innerHTML = `<div>${order.customer}</div>\n`;

		(order.items).forEach(item => {
			list.innerHTML += `\t\t<li><span>${item.amount}</span> ${item.name}</li>\n`;
		});

		// Remove order on click
		disp.addEventListener('click', () => {
			disp.remove();
		})

		// Display on website
		disp.appendChild(list);
		main.appendChild(disp);
	});
}

// TODO: update whenever change in server
setTimeout(update, 5000);