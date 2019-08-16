import React from 'react';
import Card from './Card';

const CardList = ({ players }) => {
	return (
		<div style={{margin: '0 15vw'}}> {/*separation of concerns...refactor this to index.css*/}
			{
				players.map((athlete, i) => {
					return (
						<Card
							key={players[i].playerNumber} 
							playerNumber={players[i].playerNumber} 
							name={players[i].name} 
							position={players[i].position} 
							profilePic={players[i].profilePic}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;