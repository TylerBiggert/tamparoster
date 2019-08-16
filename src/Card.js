import React from 'react'; //needed since I am writing JSX below

const Card = ({playerNumber, name, position, profilePic}) => {
	return (
		<div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'> {/*Techyon styling*/}
			<img src={profilePic} alt='Tampa Bay Player' className='photoSize' />
			<div>
				<h2 className='pb4'>{name}</h2>
				<p><span className='f2 ma2 numberLft'>#{playerNumber}</span> <span className='f3 ma2 textRt'>{position}</span></p>
			</div>
		</div>
	);
}

export default Card;