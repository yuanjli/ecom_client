import React from 'react';

const UserHistoryBlock = (props) => {
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