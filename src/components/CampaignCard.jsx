import AnalyticsChart from "./AnalyticsChart";

export default function CampaignCard({ campaign }) {
  const overview = campaign.overview || {};

  const kpiData = [
    {
      label: "Emails Sent",
      value: overview.emails_sent_count,
      color: "bg-blue-500",
    },
    { label: "Opens", value: overview.open_count, color: "bg-green-500" },
    { label: "Replies", value: overview.reply_count, color: "bg-red-500" },
    {
      label: "Opportunities",
      value: overview.total_opportunities,
      color: "bg-yellow-500",
    },
    {
      label: "Meetings Booked",
      value: overview.total_meeting_booked,
      color: "bg-purple-500",
    },
    {
      label: "Deals Closed",
      value: overview.total_closed,
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-6 w-full max-w-4xl transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">
        {campaign.campaign_name}
      </h2>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {kpiData.map((kpi) => (
          <div
            key={kpi.label}
            className={`rounded-xl p-4 text-center text-white font-bold shadow-lg ${kpi.color} animate-fadeIn`}
          >
            <p className="text-sm">{kpi.label}</p>
            <p className="text-2xl mt-1">{kpi.value ?? "-"}</p>
          </div>
        ))}
      </div>

      {/* Daily Metrics Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsChart
          data={campaign.daily}
          metric="sent"
          color="#2563EB"
          name="Emails Sent"
        />
        <AnalyticsChart
          data={campaign.daily}
          metric="opened"
          color="#16A34A"
          name="Opens"
        />
        <AnalyticsChart
          data={campaign.daily}
          metric="replies"
          color="#DC2626"
          name="Replies"
        />
        <AnalyticsChart
          data={campaign.daily}
          metric="clicks"
          color="#F59E0B"
          name="Clicks"
        />
        <AnalyticsChart
          data={campaign.daily}
          metric="opportunities"
          color="#8B5CF6"
          name="Opportunities"
        />
      </div>
    </div>
  );
}
