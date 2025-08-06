import { useState } from "react";
import InputValue from "./InputValue";
import SelectInput from "./SelectInput";

function SplitWithFriend({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <InputValue value={bill} set={setBill}>
          💰 Bill value
        </InputValue>
        <InputValue value={paidByUser} set={setPaidByUser} billVal={bill}>
          🧍‍♀️ Your expense
        </InputValue>

        <label htmlFor="">👫 {selectedFriend.name}'s expense</label>
        <input type="number" disabled value={paidByFriend} />

        <SelectInput
          friendName={selectedFriend.name}
          value={whoIsPaying}
          set={setWhoIsPaying}
        />
        <button className="button">Split bill</button>
      </form>
    </>
  );
}

export default SplitWithFriend;
