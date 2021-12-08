import PropTypes from "prop-types";
// import user from "../../data/user.json"
import st from './Profile.module.css'


const Profile = ({ username, tag, location, avatar, stats }) => {
    const {followers, views, likes} = stats;
    return (
        <div className={st.profile}>
            <div className={st.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={st.avatar}
                />
                <p className={st.name}>{username}</p>
                <p className={st.tag}>{tag}</p>
                <p className={st.location}>{location}</p>
            </div>

            <ul className={st.stats}>
                <li className={st.item}>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li className={st.item}>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li className={st.item}>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
