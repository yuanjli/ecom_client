import React from 'react';
//import moment from 'moment'; // third party library that could parse dates;

const UserProductBlock = ({products, removeItem}) => {

	const renderCartImage = (images) => {
		if(images.length > 0){
			return images[0].url
		} else {
			return '/images/image_not_availble.png'
		}
	}



	const renderItems = () => (
		products.cartDetail ?
			products.cartDetail.map(product=> (
				<div className="user_product_block" key={product._id}>
					<div className="item">
						<div
							className="image"
							style={{background:`url(${renderCartImage()} no-repeat`}}
							></div>
							</div>

				</div>
			))
		:null 
		
	)

	return (
		<div>
		Something coold should go here 
		
			{renderItems()}
		</div>

	);
};

export default UserProductBlock;