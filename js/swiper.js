new Swiper('.review-slider', {
	navigation: {
		nextEl: '.review-next',
		prevEl: '.review-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	watchOverflow: true,

	slidesPerGroup: 1,

	slidesPerView: slidesWindowWidth(),

	spaceBetween: 52,
})

function slidesWindowWidth() {
	if (document.documentElement.clientWidth > 1024) {
		return 2
	} else {
		return 1
	}
}
