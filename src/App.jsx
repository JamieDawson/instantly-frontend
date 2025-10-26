import { useEffect, useState } from "react";
import { fetchAnalytics } from "./api";
import CampaignCard from "./components/CampaignCard";

function App() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAnalytics();
      setCampaigns(data);
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-lg shadow-lg">
        Instantly.ai Analytics Dashboard
      </h1>

      <div className="w-full flex flex-col items-center gap-8">
        {campaigns.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Loading analytics...
          </p>
        ) : (
          campaigns.map((c) => (
            <CampaignCard key={c.campaign_id} campaign={c} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
