import React from "react";
import { Box, Tooltip } from "@mui/material";
import dayjs from "dayjs";

export const HeatmapCell = ({ date, volatility, onClick }) => {
  let backgroundColor = "#d3d3d3"; // default
  if (volatility > 0.7) backgroundColor = "#f44336"; // red
  else if (volatility > 0.4) backgroundColor = "#ff9800"; // orange
  else backgroundColor = "#4caf50"; // green

  return (
    <Tooltip title={`Volatility: ${volatility.toFixed(2)}`}>
      <Box
        onClick={onClick}
        sx={{
          width: "100%",
          height: 60,
          backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {dayjs(date).date()}
      </Box>
    </Tooltip>
  );
};
