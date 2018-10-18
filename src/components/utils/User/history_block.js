import React from 'react';
//import moment from 'moment'; // third party library that could parse dates;

const UserHistoryBlock = (props) => {


	//const renderBlocks = ()



	return (
		<div className="history_blocks">
			<table>
				<thead>
					<tr>
						<th>Date of purchase</th>
						<th>Product</th>
						<th>Price paid</th>
						<th>Quantity</th>
					</tr>
				</thead>
			</table>
		</div>

	);
};

export default UserHistoryBlock;