import PropTypes from "prop-types";


const FriendListItem = ({ stats }) => {
    return (
        <li>
            <span></span>
            <img src={stats.avatar} alt="User avatar" width="48" />
            <p>{stats.name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    stats: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
    }),
};

export default FriendListItem;
