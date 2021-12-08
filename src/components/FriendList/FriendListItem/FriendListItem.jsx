import PropTypes from "prop-types";
import st from "./FriendListItem.module.css";


const FriendListItem = ({ stats }) => {
    return (
        <li className={st.item}>
            <span className={stats.isOnline ? st.status : st.notStatus}></span>
            <img className={st.avatar} src={stats.avatar} alt="User avatar" width="48" />
            <p className={st.name}>{stats.name}</p>
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
