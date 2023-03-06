////// Header & burger

const burger = document.querySelector('.burger')
const mobTelImg = document.querySelector('.mob-tel')
const navBg = document.querySelector('.burger-menu')
const navList = document.querySelector('.nav-list')
const cityTel = document.querySelector('.city-tel')

const showHideBlocks = () => {
	if (document.documentElement.clientWidth > 768) {
		mobTelImg.classList.add('none')
		burger.classList.add('none')
		navBg.classList.add('none')

		navList.classList.remove('none')
		cityTel.classList.remove('none')
	} else {
		mobTelImg.classList.remove('none')
		burger.classList.remove('none')
		navBg.classList.remove('none')

		navList.classList.add('none')
		cityTel.classList.add('none')
	}
}

showHideBlocks()

window.addEventListener('resize', () => {
	showHideBlocks()
})

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	navBg.classList.toggle('active')
	document.body.classList.toggle('lock')
})

///// About-Us

// document.querySelector('.about-us-btns-block').addEventListener('click', (e) => {
// 	const btnCirle = e.target.closest('.about-us-btn__img')

// 	if(btnCirle) {
// 		const active = document.querySelector('.about-us-btns-block').querySelector('.about-us-btn__img.about-us-btn--active')
// 		console.log(active);

// 		if(active){
// 			active.classList.remove('.about-us-btn--active')
// 			btnCirle.classList.add('.about-us-btn--active')
// 		}
// 	}
// })

const btnsIcecream = document.querySelectorAll('.about-us-btn__img')

btnsIcecream.forEach(btn=>{
	btn.addEventListener('click', () => {
		btnsIcecream.forEach(btn=>{
			btn.classList.remove('about-us-btn--active')
		})
		
		btn.classList.add('about-us-btn--active')
	})
})

///// Accardeon

document.querySelector('.question-accordion').addEventListener('click', (e) => {
	const item = e.target.closest('.question-accordion__item')
	const text = item.querySelector('.question-accordion__text')
	const icon = item.querySelector('.question-accordion__icon')

	if (item) {
		const active = item.closest('.question-accordion__item--active')
		if (active) {
			item.classList.remove('question-accordion__item--active')
			text.classList.remove('question-accordion__text--active')
			icon.classList.remove('question-accordion__icon--active')
		} else {
			item.classList.add('question-accordion__item--active')
			text.classList.add('question-accordion__text--active')
			icon.classList.add('question-accordion__icon--active')
		}
	}
})

const btnUp = document.querySelector('.btn-up')

btnUp.onclick = function () {
	window.scrollTo(pageXOffset, 0);
	console.log(1);
	// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function () {
	btnUp.hidden = (pageYOffset > document.documentElement.clientHeight);
});