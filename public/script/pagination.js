const tabs = document.getElementsByTagName('section');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showTab(n) {
	tabs[n].style.display = 'block';

	if (n === 0) {
		prevBtn.style.display = 'none';
	} else if (n === tabs.length - 1) {
		nextBtn.innerHTML = 'submit';
	} else {
		prevBtn.style.display = 'block';
	}
}

function moveTab(n) {
	let currentTab;
	for (let i = 0; i < tabs.length; i++) {
		if (getComputedStyle(tabs[i]).display === 'none') {
			currentTab = i;
		}
	}

	if (!(currentTab < 0 || currentTab >= tabs.length)) {
		currentTab += n;
	}

	showTab(currentTab);
}