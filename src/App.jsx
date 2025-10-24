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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-blue-500">
        Instantly.ai Analytics Dashboard
      </h1>
      {/* Tailwind test box */}
      <div className="w-32 h-32 bg-red-500 text-white flex items-center justify-center mb-6">
        Tailwind Works!
      </div>
      <div className="w-full flex flex-col items-center pl-6">
        {campaigns.length === 0 ? (
          <p>Loading analytics...</p>
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
