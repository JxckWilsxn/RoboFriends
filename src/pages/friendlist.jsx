import { useOutletContext } from 'react-router-dom';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { Navbar } from '../components/Navbar';

const FriendList = () => {
    const { friendsIds, combinedArray } = useOutletContext();  // get the saved friend IDs and reuse filtered list from Layout or Home

    // Filter only robots that were added as friends
    const friendRobots = combinedArray.filter(robot => friendsIds.includes(robot.id))
    
    return (
        <div>
            <h1 className="text-center text-[30px] text-[#181818] dark:text-[#f5f5f5]">friends list</h1>
        
            { friendsIds.length === 0 ? (
                <Scroll>
                    <h1 className='m-25 text-2xl dark:text-[#f5f5f5]'>No friends added yet...</h1>
                </Scroll>
            ) : (
                <Scroll>
                    <CardList robots={friendRobots} />
                </Scroll>
            )}
        </div>
    )
}

export default FriendList;

