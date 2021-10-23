window.addEventListener('DOMContentLoaded', () => {
	const observerForTableOfContentActiveState = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				clearActiveStatesInTableOfContents();
				if(document.querySelector(`nav#TableOfContents li a[href="#${id}"]`))
				document.querySelector(`nav#TableOfContents li a[href="#${id}"]`).parentElement.classList.add('active');
			}
		});
	});	
	document.querySelectorAll('h2[id]').forEach((section) => {
		observerForTableOfContentActiveState.observe(section);
	});
});

function clearActiveStatesInTableOfContents() {
	document.querySelectorAll('nav li').forEach((section) => {
		section.classList.remove('active');
	});
}