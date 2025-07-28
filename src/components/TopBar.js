import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ px: 2, background: "#fff" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left - Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image src="/mseLogo.png" alt="Logo" width={65} height={60} />
        </Box>

        {/* Center - Nav Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <IconButton size="small" sx={{ bgcolor: "#f2f2f2" }}>
            <Search fontSize="small" />
          </IconButton>
          <Link href="/markets">
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Markets
            </Typography>
          </Link>
          <Link href="/calendar">
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Calendar
            </Typography>
          </Link>
          <Link href="/orders">
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Orders
            </Typography>
          </Link>
        </Box>

        {/* Right - Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "purple" }}>PK</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
