import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import useFMPOrderbook from "@/hooks/useFMPOrderbook";

const Orderbook = () => {
  const { bids, asks } = useFMPOrderbook();

  return (
    <Box p={2}>
      <Typography variant="h6">Live Orderbook (BTC/USD)</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle2">Bids</Typography>
          {bids.map((bid, index) => (
            <Typography key={index}>{bid.price} - {bid.size}</Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">Asks</Typography>
          {asks.map((ask, index) => (
            <Typography key={index}>{ask.price} - {ask.size}</Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orderbook;
