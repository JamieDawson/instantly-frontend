import AnalyticsChart from "./AnalyticsChart";

export default function CampaignCard({ campaign }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-3xl transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {campaign.campaign_name}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 dark:text-gray-300 mb-4">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-center font-semibold">
          Leads: {campaign.leads_count || "-"}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-center font-semibold">
          Contacted: {campaign.contacted_count || "-"}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-center font-semibold">
          Opens: {campaign.open_count || "-"}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-center font-semibold">
          Replies: {campaign.reply_count || "-"}
        </div>
      </div>

      <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
        Daily Metrics
      </h3>
      <AnalyticsChart
        data={campaign.daily}
        metric="emails_sent_count"
        color="#2563EB"
        name="Emails Sent"
      />
      <AnalyticsChart
        data={campaign.daily}
        metric="open_count"
        color="#16A34A"
        name="Opens"
      />
      <AnalyticsChart
        data={campaign.daily}
        metric="reply_count"
        color="#DC2626"
        name="Replies"
      />
    </div>
  );
}
