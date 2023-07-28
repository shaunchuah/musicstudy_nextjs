import RecruitmentStatsData from "../data/recruitment_stats.json";
import RecruitmentStatsRow from "./RecruitmentStatsRow";

export default function RecruitmentStats() {
  // import data from file here and define constants
  const center_statistics = RecruitmentStatsData.center_statistics;
  const base_width = 30; // use this number to adjust the denominator for the center breakdown bars
  const target_participants = 206;

  //perform data calculations and sorting
  var sorted_center_statistics = center_statistics.sort(
    (a, b) => b.number_of_participants - a.number_of_participants
  );
  let participant_number = 0;
  sorted_center_statistics.forEach((center) => {
    participant_number += center.number_of_participants;
  });

  const formatted_participant_percent =
    parseFloat((participant_number / target_participants) * 100).toFixed(2) +
    "%";
  const last_updated = RecruitmentStatsData.last_updated;

  return (
    <div className="bg-white border p-6 rounded-lg  mb-4">
      <h3 className="text-xl mb-2">Marvel Recruitment Status</h3>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-emerald-500 to-green-700 h-2.5 rounded-full"
          style={{ width: formatted_participant_percent }}></div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>{participant_number} / 206 participants</div>
        <div className="text-sm italic">Last updated: {last_updated}</div>
      </div>

      <div className="mt-4">
        <h4 className="text-lg mb-2">Center Breakdown</h4>
        {sorted_center_statistics.map(({ center, number_of_participants }) => (
          <>
            <RecruitmentStatsRow
              key={center}
              center={center}
              number_of_participants={number_of_participants}
              base_width={base_width}
            />
          </>
        ))}
      </div>
    </div>
  );
}
