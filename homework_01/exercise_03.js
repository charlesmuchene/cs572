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
		return price - price * discountPercentage;
	};
}

console.log(applyCoupon(avocado)(10));
