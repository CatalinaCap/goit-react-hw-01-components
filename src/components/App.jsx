import Profile from './Profile';
import user from '../user.json';
import statsData from '../data.json';
import Statistics from './Statistics';
import FriendList from './FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="File types" stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
