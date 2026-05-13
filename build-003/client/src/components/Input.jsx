export default function Input({
name,
  age,
  phoneNumber,
  placeholder,
  handleInput,
}) {
  return (
    <div>
      <input
        className="input-field"
        info={name, age, phoneNumber}
        placeholder={placeholder}
        handleInput={handleInput}
      />
    </div>
  );
}
