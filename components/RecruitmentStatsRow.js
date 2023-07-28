export default function RecruitmentStatsRow({
  center,
  number_of_participants,
  base_width,
}) {
  const formatted_percent =
    parseFloat((number_of_participants / base_width) * 100).toFixed(2) + "%";
  return (
    <div className="grid grid-cols-6 items-center">
      <div className="col-span-2 text-sm">{center}</div>
      <div className="col-span-3">
        <div className="w-full bg-white rounded-full h-2">
          <div
            className="bg-green-700 h-2 rounded-full"
            style={{ width: formatted_percent }}></div>
        </div>
      </div>
      <div className="col-span-1 text-sm">{number_of_participants}</div>
    </div>
  );
}
