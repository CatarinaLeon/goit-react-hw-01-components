import PropTypes from 'prop-types';
import st from "./Statis.module.css";

const Statis = ({ stats }) => {
    return (
        <ul className={st.list}>
            <li className={st.statList}>
                <span>{stats.label}</span>
                <span>{stats.percentage}</span>
            </li>
        </ul>
    );
};

Statis.propTypes = {
    stats: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
};

export default Statis;

