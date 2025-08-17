import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DarkMode from "./components/DarkMode";
import SearchBox from "./components/SearchBox";
import ErrorBoundry from './components/ErrorBoundry';

export const Layout = () => {
    const [searchfield, setSearchfield] = useState('');
    const [people, setPeople] = useState([]);
    const [friendsIds, setFriendIds] = useState(() => {
        const saved = localStorage.getItem('friends');
        return saved ? JSON.parse(saved) : [];
    });  // [array of friend IDs, function to update that array.]

    useEffect(() => {
        localStorage.setItem('friends', JSON.stringify(friendsIds));
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setPeople(users))
    }, [friendsIds]);

    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }


    const filteredPeopleList = people.filter(person => {
        return person.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // Function to add an ID to the friend list (without duplicates)
    const addFriend = (id) => {
        setFriendIds((prev) => prev.includes(id) ? prev : [...prev, id]) // if the previous (prev) state already includes ID then keep same, otherwise add new id to friendlist.
    }

    const removeFriend = (id) => {
        setFriendIds((prev) => prev.filter(friendsId => friendsId !== id)); // keeps IDs that don't match the one removed
    }

    const [pinnedIds, setPinnedIds] = useState(() => {
        const savedPins = localStorage.getItem('pinned-friends');
        return savedPins ? JSON.parse(savedPins) : [];
    });

    useEffect(() => {
        localStorage.setItem('pinned-friends', JSON.stringify(pinnedIds));
    }, [pinnedIds]);
    
    const pinFriend = (id) => {
        setPinnedIds((prev) => prev.includes(id) ? prev : [...prev, id]); // does previous state of pinnedFriends array already include the selected ID? yes=keep the same, no=return new array with id added.
    }

    const unpinFriend = (id) => {
        setPinnedIds((prev) => prev.filter(pinnedIds => pinnedIds !== id)); // keeps IDs that don't match the one removed
    }

    const pinnedFriendCards = filteredPeopleList.filter(person => pinnedIds.includes(person.id));
    const combinedArray = [...pinnedFriendCards, ...filteredPeopleList.filter(person => !pinnedIds.includes(person.id))];

    return (
        <div className='text-center'>
            <h1 className='p-4 text-[35px] sm:text-[75px] font-bold bg-clip-text bg-gradient-to-r from-[#204cc6] to-[#03d1ff] inline-block text-transparent'>Concisetacts</h1>
            <DarkMode/>
            <SearchBox searchChange={onSearchChange}/>
            <Navbar/>
            <main>
                <ErrorBoundry>
                    {/* Share friendIds and addFriend with all pages */}
                    <Outlet context={{ filteredPeopleList, friendsIds, addFriend, pinnedIds, removeFriend, pinFriend, unpinFriend, combinedArray }}/>
                </ErrorBoundry>
            </main>
        </div>
    )
}