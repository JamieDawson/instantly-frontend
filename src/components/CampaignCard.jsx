import AnalyticsChart from "./AnalyticsChart";

export default function CampaignCard({ campaign }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-2xl transform translate-x-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {campaign.campaign_name}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700 mb-4">
        <div>Leads: {campaign.leads_count || "-"}</div>
        <div>Contacted: {campaign.contacted_count || "-"}</div>
        <div>Opens: {campaign.open_count || "-"}</div>
        <div>Replies: {campaign.reply_count || "-"}</div>
      </div>

      <h3 className="font-semibold mb-2 text-gray-700">Daily Metrics</h3>
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
