const navButton = document.querySelector('#bookasession');
const navigation = document.querySelector('.hero');

navButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	navButton.classList.toggle('open');
});