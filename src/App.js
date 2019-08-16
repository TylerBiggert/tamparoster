import React, { Component } from 'react';
import CardList from './CardList';
import { players } from './Players';
import SearchBox from './SearchBox';


	//app comonent with two states
class App extends Component {
	constructor() {
		super();
		this.state = {
			players: players,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const filteredPlayers = this.state.players.filter(players =>{
			return players.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
		return (
			<div className='tc'>
				<img id='raysLogo' src='/tamparoster/img/tampaLogo.png' alt='Tampa Bay Rays Logo' />
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList players={filteredPlayers}/>
			</div>
		);
	}
}

export default App;