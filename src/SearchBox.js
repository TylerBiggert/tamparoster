import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa2 ba'
				type='search'
				placeholder='search player'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;