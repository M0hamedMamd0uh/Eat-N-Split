function SelectInput({ friendName, value, set }) {
  return (
    <>
      <label htmlFor="selection">🤑 Who is paying the bill</label>

      <select
        id="selection"
        value={value}
        onChange={(e) => set(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>
    </>
  );
}

export default SelectInput;
