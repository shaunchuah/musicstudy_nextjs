export default function CenterCard({ name, city }) {
  return (
    <div className="border rounded-lg px-4 py-4 shadow-sm text-left">
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-wider">{city}</p>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
}
