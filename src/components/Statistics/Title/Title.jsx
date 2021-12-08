import PropTypes from 'prop-types';
import st from "./Title.module.css";

const Title = ({ title }) => {
    return title && <h2 className={st.titles}>{title}</h2>;
};

Title.propTypes = {
    title: PropTypes.string,
};

export default Title;