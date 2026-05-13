export default function Input({ name, placeholder, onChange }) {
  return (
    <div>
      <input
        className="input-field"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
