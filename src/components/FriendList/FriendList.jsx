import friends from '../../data/friends.json';
import FriendListItem from './FriendListItem/FriendListItem';


function FriendList() {
    return (
        <ul>
            {friends.map((stats) => (
                <FriendListItem key={stats.id} stats={stats} />
            ))}
        </ul>
    );
};

export default FriendList;

