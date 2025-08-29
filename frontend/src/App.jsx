import { useState } from "react";
import { scanWebsite } from "./api";

export default function App() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);

  const handleScan = async () => {
    const data = await scanWebsite(url);
    setResults(data.results);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🌐 WebScan</h1>
      <input
        className="border p-2 w-full rounded mb-4"
        placeholder="Enter website URL (https://...)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleScan}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Scan
      </button>

      {results && (
        <div className="mt-6 text-left border p-4 rounded">
          <h2 className="font-semibold mb-2">Results</h2>
          <ul>
            {Object.entries(results).map(([key, value]) => (
              <li key={key}>
                {key}: {value ? "✅" : "❌"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

