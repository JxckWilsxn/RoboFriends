import { BsFillPinFill } from "react-icons/bs";
import { useOutletContext } from 'react-router-dom';

const Pin = ({ id }) => {

    const { pinFriend } = useOutletContext(); // get the function from Layout

    const pinPerson = () => {
        pinFriend(id); // Send selected ID to pinnedFriends state array
    }
    
    return (
        <button id="pin-icon" onClick={pinPerson} className={"w-[50px] h-[50px] flex lg:hidden cursor-pointer rounded-3xl absolute hover:bg-[#05050575] group-hover:flex"}>
            <div className="m-auto">
                <BsFillPinFill />
            </div>
        </button>
    )
}

export default Pin