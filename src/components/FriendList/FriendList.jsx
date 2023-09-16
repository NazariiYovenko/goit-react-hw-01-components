import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendsList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
