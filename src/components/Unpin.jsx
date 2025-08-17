import { BsFillPinFill } from "react-icons/bs";
import { useOutletContext } from 'react-router-dom';

const Unpin = ({ id }) => {

    const { unpinFriend } = useOutletContext(); // get the function from Layout

    const unpinPerson = () => {
        unpinFriend(id); // Unpin selected ID from the pinnedFriends state array
    }
    
    return (
        <button id="pin-icon" onClick={unpinPerson} className={"w-[50px] h-[50px] bg-[#05050575] backdrop-blur-sm cursor-pointer rounded-3xl absolute flex"}>
            <div className="m-auto">
                <BsFillPinFill />
            </div>
        </button>
    )
}

export default Unpin