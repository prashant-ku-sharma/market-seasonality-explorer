"use client";
import TopBar from "@/components/TopBar";
import CompanyProfileCard from "@/components/CompanyProfileCard";
import { useState } from "react";
import Search from "@/components/Search";
import { CircularProgress, Typography } from "@mui/material";

export default function Home() {
  const [companyProfile, setCompanyProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <TopBar />

      <Search
        setCompanyProfile={setCompanyProfile}
        setLoadingProfile={setLoadingProfile}
        setError={setError}
      />

      {error ? (
        <Typography mt={20} textAlign="center">
          Something went wrong, Please try later!
        </Typography>
      ) : loadingProfile ? (
        <Typography mt={20} textAlign="center">
          <CircularProgress size={24} />
        </Typography>
      ) : companyProfile ? (
        <CompanyProfileCard company={companyProfile} />
      ) : null}

      {/* <main className={styles.main}> */}
      {/* <HeatmapCell date={new Date()} volatility={0.5} onClick={() => {}} /> */}
      {/* <DashboardPanel date={new Date()} data={{}} /> */}
      {/* <Orderbook /> */}
      {/* </main> */}
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
