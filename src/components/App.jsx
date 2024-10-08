import Profile from '../components/Profile';
import user from '../components/user.json';
import statsData from '../components/data.json';
import Statistics from '../components/Statistics';
import FriendList from './FriendList';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';
import TransactionHistory from '../components/TransactionHistory';

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
