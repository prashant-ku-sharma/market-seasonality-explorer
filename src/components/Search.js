import React, { useEffect, useState } from "react";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { FMPService } from "@/service/FMPService";

const symbols = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com, Inc." },
  { symbol: "TSLA", name: "Tesla, Inc." },
];

export default function Search({
  setCompanyProfile,
  setLoadingProfile,
  setError,
}) {
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");

  useEffect(() => {
    handleSymbolChange({ target: { value: "AAPL" } });
  }, []);

  const handleSymbolChange = (event) => {
    const symbol = event.target.value;
    setSelectedSymbol(symbol);
    setCompanyProfile(null);

    if (!symbol) return;

    setLoadingProfile(true);
    setError(false);
    FMPService.getCompanyProfile(symbol)
      .then((response) => {
        console.log({ response });
        setCompanyProfile(response.data[0]);
      })
      .catch((err) => {
        setError(true);
        console.error("Failed to load profile", err);
      })
      .finally(() => {
        setLoadingProfile(false);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="stock-select-label">Select Stock Symbol</InputLabel>
        <Select
          labelId="stock-select-label"
          id="stock-select"
          value={selectedSymbol}
          defaultValue="AAPL"
          label="Select Stock Symbol"
          onChange={handleSymbolChange}
          sx={{ background: "#fff" }}
        >
          {symbols.map((item) => (
            <MenuItem key={item.symbol} value={item.symbol}>
              {item.symbol} — {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
