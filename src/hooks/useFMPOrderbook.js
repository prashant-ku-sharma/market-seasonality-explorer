import { useEffect, useState } from "react";
import config from "../../config";

export default function useFMPOrderbook(symbol = "AAPL") {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${config.FMP_SERVICE}/api/v3/book/${symbol}?apikey=${config.FMP_API_KEY}`
        );
        const data = await res.json();
        setBids(data.bids || []);
        setAsks(data.asks || []);
      } catch (error) {
        console.error("FMP API error:", error);
      }
    };

    fetchData();
    // const interval = setInterval(fetchData, 10000); // poll every 10s
    // return () => clearInterval(interval);
  }, [symbol]);

  return { bids, asks };
}
