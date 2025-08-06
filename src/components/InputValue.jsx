function InputValue({ children, value, set }) {
  return (
    <>
      <label htmlFor={children}>{children}</label>
      <input
        type="number"
        id={children}
        value={value}
        onChange={(e) => set(+e.target.value)}
      />
    </>
  );
}

export default InputValue;
