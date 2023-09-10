import Profile from './Profile/Profile';
import user from './data/user.json';
// import friends from './data/friends.json';
// import transactions from './data/transactions.js';
// import data from './data/data.json';

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
    </div>
  );
};

// "jgluke"
