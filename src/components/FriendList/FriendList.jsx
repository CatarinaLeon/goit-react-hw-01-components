import friends from '../../data/friends.json';
import FriendListItem from './FriendListItem/FriendListItem';
import st from "../FriendList/FriendList.module.css";

function FriendList() {
    return (
        <ul className={st.friendList}>
            {friends.map((stats) => (
                <FriendListItem key={stats.id} stats={stats} />
            ))}
        </ul>
    );
};

export default FriendList;

