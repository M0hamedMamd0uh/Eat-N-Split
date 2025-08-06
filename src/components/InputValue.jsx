function InputValue({ children, value, set, billVal }) {
  return (
    <>
      <label htmlFor={children}>{children}</label>
      <input
        type="number"
        id={children}
        value={value}
        onChange={(e) =>
          set(+e.target.value > billVal ? value : +e.target.value)
        }
      />
    </>
  );
}

export default InputValue;
