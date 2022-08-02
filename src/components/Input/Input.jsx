import "./index.css";

const Input = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      type="text"
      placeholder="type your task here..."
      onChange={handleChange}
    />
  );
};

export default Input;
