import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(res => {
			setProducts(res.data);
		});
	}, []); // 한번만 실행하기 위해서 빈배열 넘겨야 한다.

	console.log(products);
	return (
		<ul>
			{products &&
				products.map(product => {
					return <li key={product.id}>{product.name}</li>;
				})}
		</ul>
	);
}
