import PropTypes from "prop-types";
import st from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={st.transaction}>
            <thead className={st.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                        <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                        </tr> 
                    ))}
            </tbody>
        </table>
    );
};

TransactionHistory.protoPype = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};

export default TransactionHistory;
