const elHamburgBtn = document.querySelector('#hamburg-btn');
const elOverlayElement = document.querySelector('.overlay');
const elSiteNavbar = document.querySelector('.site-header_navbar');
const elCloseBtn = document.querySelector('.close-btn');
const elRoadListItem = document.querySelectorAll('.road-list_item');
const elNavbarListItem = document.querySelectorAll('.navbar-list_item');
const elHeroSection = document.querySelector('.hero-section_end');
const elTransactionSection = document.querySelector('.transaction');
// const elHeroSectionOpen = document.querySelector('.open-hero');


elHamburgBtn.addEventListener('click', ()=> {
	elSiteNavbar.classList.add('open-navbar');
	elOverlayElement.style.display = 'block'
});

elCloseBtn.addEventListener('click', ()=> {
	elSiteNavbar.classList.remove('open-navbar');
	elOverlayElement.style.display = 'none';
})

elRoadListItem.forEach(item => {
	item.addEventListener('click', ()=> {
		elRoadListItem.forEach(el => el.classList.remove('active'));
		console.log(item.textContent);
		item.classList.add('active');
		if(item.textContent.trim() == 'Overview') {
			elHeroSection.classList.remove('close-hero');
			elTransactionSection.classList.add('close-hero');
		}
		else if (item.textContent.trim() == 'Transaction') {
			elHeroSection.classList.add('close-hero');
			elTransactionSection.classList.remove('close-hero');
		}
		
		
	})
});

elNavbarListItem.forEach(item => {
	item.addEventListener('click', ()=> {
		elNavbarListItem.forEach(element => element.classList.remove('active-link'));
		item.classList.add('active-link');
	})
});
