import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import transactions from '../../data/transactions.json';
import user from '../../data/user.json';

const App = () => {
    return (
        <>
            <Profile username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics/>
            <FriendList/>
            <TransactionHistory transactions={transactions} />
        </>
    )
}

export default App;
