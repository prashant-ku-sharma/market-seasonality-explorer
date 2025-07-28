"use client";
import React from "react";
import TopBar from "@/components/TopBar";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Orders = () => {
  return (
    <>
      <TopBar />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "#f9f9f9",
          p: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The page you are looking for doesn not exist.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};
export default Orders;
