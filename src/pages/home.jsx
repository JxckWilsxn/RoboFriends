import { useOutletContext } from 'react-router-dom';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { Layout } from '../Layout';

const Home = () => {
    const { filteredRobots, combinedArray } = useOutletContext();

    return !filteredRobots.length ?
    <Scroll>
        <h1 className='m-25 text-2xl dark:text-[#f5f5f5]'>No results found</h1>
    </Scroll> :
    (
        <div>
            <Scroll>
                <CardList 
                   robots = {combinedArray}
                />
            </Scroll>
        </div>
    );
}

export default Home;

/* Original Way
import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default Home;
*/

