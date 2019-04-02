const avocado = {
	name: 'Avocado',
	type: 'Fruit',
	category: 'Food',
	price: 200
};

function applyCoupon(item) {
	return (discount) => {
		const price = item.price;
		const discountPercentage = discount / 100;
		return {
			price: price - price * discountPercentage
		};
	};
}

assert(applyCoupon(avocado)(10).price === 180);
