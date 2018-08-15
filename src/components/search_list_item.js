import React from 'react';

const SearchListItem = ({img}) => {
	const imageUrl = img;
	
	return (
		<li className="list-group-item" key={imageUrl.toString()}>
				<img className="media-object" src={imageUrl}  alt=""  key={imageUrl} />
		</li>
	);
};

export default SearchListItem;
