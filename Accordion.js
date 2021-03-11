class Accordion {
	constructor(el) {
		this.$el = document.querySelector(el.class).children;
		this.one_block = el.one_block || false;
		this.speed = el.speed / 1000 || .4;

		this.init();
	}

	show(item) {
		const acc_head = item.firstElementChild,
			acc_content = acc_head.nextElementSibling;

		acc_content.style.transition = `height ${this.speed}s`;
		acc_head.classList.toggle('active');
		acc_head.classList.contains('active') 
		? acc_content.style.height = acc_content.scrollHeight + 'px'
		: acc_content.style.height = null;
	}

	/* удалить все классы active у всех, кроме notThis */
	hideAllBlockNotThis(notThis) {
		for (let item of this.$el) {
			const acc_head = item.firstElementChild;
			const acc_content = acc_head.nextElementSibling;

			if (item === notThis) continue;
			acc_head.classList.remove('active');
			acc_content.style.height = null;
		}
	}

	init() {
		console.log('Accordion init');
		for (let item of this.$el) {
			item.addEventListener('click', () => {
				if (this.one_block) this.hideAllBlockNotThis(item);
				this.show(item);
			})
		}
	}
}
