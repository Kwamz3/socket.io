export default function Button({ title, onClick }) {
  return (
    <div>
      <button className="data-button" onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
