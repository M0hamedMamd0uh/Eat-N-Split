import { useState } from "react";

function AddFriend({ onShowAddFriends, onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAdd(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleAdd}>
        <label htmlFor="friendName">👫 Friend name</label>
        <input
          type="text"
          id="friendName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="friendImage">🌄 Image URL</label>
        <input
          type="text"
          id="friendImage"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="button">Add</button>
      </form>
      <button className="button" onClick={onShowAddFriends}>
        Close
      </button>
    </>
  );
}

export default AddFriend;
