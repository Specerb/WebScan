
import axios from "axios";

const API_BASE = "http://localhost:8000";

export async function scanWebsite(url) {
  const res = await axios.get(`${API_BASE}/scan`, { params: { url } });
  return res.data;
}
