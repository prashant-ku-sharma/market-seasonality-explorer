import React from "react";
import { Box, Typography } from "@mui/material";

const DashboardPanel = ({ date, data }) => {
  return (
    <Box p={2} borderLeft="2px solid #ccc" height="100%">
      {/* <Typography variant="h6">Details for {date}</Typography> */}
      <Typography>Open: {data.open}</Typography>
      <Typography>Close: {data.close}</Typography>
      <Typography>High: {data.high}</Typography>
      <Typography>Low: {data.low}</Typography>
      <Typography>Volume: {data.volume}</Typography>
      <Typography>Volatility: {data.volatility}</Typography>
      <Typography>RSI: {data.rsi}</Typography>
    </Box>
  );
};

export default DashboardPanel;
