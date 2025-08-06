import AddFriend from "./AddFriend";
import Friend from "./Friend";

function Friends({
  friends,
  onAddFriend,
  showAddFriends,
  onShowAddFriends,
  onSelection,
  selectedFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
      {showAddFriends ? (
        <AddFriend
          onShowAddFriends={onShowAddFriends}
          onAddFriend={onAddFriend}
        />
      ) : (
        <button className="button" onClick={onShowAddFriends}>
          Add friend
        </button>
      )}
    </div>
  );
}

export default Friends;
