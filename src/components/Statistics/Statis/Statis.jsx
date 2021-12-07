import PropTypes from 'prop-types';


const Statis = ({ stats }) => {
    return (
        <ul>
            <li>
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

