import { useState } from "react";
import Friends from "./Friends";
import SplitWithFriend from "./SplitWithFriend";

const initialFriends = [
  {
    id: 118842,
    name: "Mohamed",
    image: "https://i.pravatar.cc/48?u=118842",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Ali",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriends() {
    setShowAddFriends((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriends(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriends(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <Friends
        friends={friends}
        onAddFriend={handleAddFriend}
        showAddFriends={showAddFriends}
        onShowAddFriends={handleShowAddFriends}
        selectedFriend={selectedFriend}
        onSelection={handleSelection}
      />
      {selectedFriend && (
        <SplitWithFriend
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
