import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
//import {robots} from './robots';
import './App.css';
import { connect } from 'react-redux';
import {setSearchField,requestRobots} from '../actions.js';


const mapStateToProps=state=>{
	return {
		searchfield: state.searchRobots.searchfield,
		robots:state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error:state.requestRobots.error

	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
	onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
	onRequestRobots:()=>dispatch(requestRobots())
	}
}

class App extends Component{

	// constructor(){
	// 	super()
	// 	this.state={
	// 		robots:[],
	// 		//searchfield:''
	// 	}
		
	// }

	// onSearchChange=(event)=>{
	// 	this.setState({searchfield:event.target.value})

	// 	}

		componentDidMount(){
			//console.log(this.props.store.getState())
			// fetch('https://jsonplaceholder.typicode.com/users')
			// .then(response => response.json())
			// .then(users => this.setState({robots:users}));
			this.props.onRequestRobots();

		}

	
//this.setState({robots:users})

render()
{
	const {searchfield,onSearchChange,robots,isPending}=this.props;

		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());

		}
			)

		if(isPending)
		{
			return <h1>Loading</h1>
		}
		else
		{
				return (
					<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
					
					</div>
						);
		}

		//console.log(filteredRobots);



}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);