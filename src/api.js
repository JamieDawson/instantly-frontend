import axios from "axios";

export const fetchAnalytics = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/analytics");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
