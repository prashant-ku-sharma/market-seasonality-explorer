import React from "react";
import { Box, Typography } from "@mui/material";

const ColorLegendBar = () => {
  const colorBlock = (colors = []) => (
    <Box display="flex" ml={1} mr={3}>
      {colors.map((c, idx) => (
        <Box
          key={idx}
          sx={{
            width: 16,
            height: 16,
            bgcolor: c,
            borderRadius: 0.5,
            mx: 0.25,
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      px={3}
      borderTop="1px solid #e0e0e0"
      bgcolor="#fff"
      // borderBottomLeftRadius={12}
      // borderBottomRightRadius={12}
      flexWrap="wrap"
    >
      {/* LOSS */}
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" color="text.secondary">
          Min. loss
        </Typography>
        {colorBlock(["#f9c2c2", "#f66", "#e53935", "#b71c1c"])}
        <Typography variant="body2" color="text.secondary">
          Max. loss
        </Typography>
      </Box>

      {/* PROFIT */}
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" color="text.secondary">
          Min. profit
        </Typography>
        {colorBlock(["#d3f9d8", "#69f0ae", "#43a047", "#1b5e20"])}
        <Typography variant="body2" color="text.secondary">
          Max. profit
        </Typography>
      </Box>

      {/* UNREALIZED */}
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" color="text.secondary">
          Unrealized : Min orders
        </Typography>
        {colorBlock(["#e0d7ff", "#9b8cff", "#6a5acb", "#4b3fa4"])}
        <Typography variant="body2" color="text.secondary">
          Max orders
        </Typography>
      </Box>
    </Box>
  );
};

export default ColorLegendBar;
