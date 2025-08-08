import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DarkMode from "./components/Darkmode";
import SearchBox from "./components/SearchBox";
import ErrorBoundry from './components/ErrorBoundry';

export const Layout = () => {
    const [searchfield, setSearchfield] = useState('');
    const [robots, setRobots] = useState([]);
    const [friendsIds, setFriendIds] = useState(() => {
        const saved = localStorage.getItem('friends');
        return saved ? JSON.parse(saved) : [];
    });  // [array of friend IDs, function to update that array.]

    useEffect(() => {
        localStorage.setItem('friends', JSON.stringify(friendsIds));
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [friendsIds]);

    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // Function to add an ID to the friend list (without duplicates)
    const addFriend = (id) => {
        setFriendIds((prev) => prev.includes(id) ? prev : [...prev, id]) // if previous state includes ID then add new id to friendlist
    }

    const removeFriend = (id) => {
        setFriendIds((prev) => prev.filter(friendsId => friendsId !== id)); // keeps IDs that don't match the one removed
    }

    return (
        <div className='text-center'>
            <h1 className='p-4 text-[75px] font-bold bg-clip-text bg-gradient-to-r from-[#204cc6] to-[#03d1ff] inline-block text-transparent'>RoboFriends</h1>
            <DarkMode/>
            <SearchBox searchChange={onSearchChange}/>
            <Navbar/>
            <main>
                <ErrorBoundry>
                    {/* Share friendIds and addFriend with all pages */}
                    <Outlet context={{ filteredRobots, friendsIds, addFriend, removeFriend }}/>
                </ErrorBoundry>
            </main>
        </div>
    )
}