import Profile from './Profile/Profile';
import user from './data/user.json';

import Statistics from './Statistics/Statistics';
import data from './data/data.json';

import friends from './data/friends.json';
import FriendList from './FriendList/FriendList';
// import transactions from './data/transactions.js';

export const App = () => {
  return (
    <div
      style={{
        padding: 20,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
