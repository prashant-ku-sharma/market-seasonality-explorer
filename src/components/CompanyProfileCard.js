import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Link,
  Chip,
  Stack,
} from "@mui/material";

const CompanyProfileCard = ({ company }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        maxWidth: 1000,
        m: "30px auto 50px",
        bgcolor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <CardMedia
            component="img"
            image={company.image}
            alt={company.symbol}
            sx={{ width: 60, height: 60, borderRadius: 2, bgcolor: "white" }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {company.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {company.sector} • {company.industry} • {company.exchangeFullName}
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            label={`Price: $${company.price}`}
            color="primary"
            sx={{ fontWeight: 600 }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Description */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        {company.description}
      </Typography>

      {/* Info Grid */}
      <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2">Symbol: {company.symbol}</Typography>
          <Typography variant="body2">ISIN: {company.isin}</Typography>
          <Typography variant="body2">CUSIP: {company.cusip}</Typography>
          <Typography variant="body2">CIK: {company.cik}</Typography>
          <Typography variant="body2">IPO Date: {company.ipoDate}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2">
            Market Cap: ${company.marketCap}
          </Typography>
          <Typography variant="body2">Beta: {company.beta}</Typography>
          <Typography variant="body2">
            Dividend: ${company.lastDividend}
          </Typography>
          <Typography variant="body2">52W Range: {company.range}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2">
            Employees: {company.fullTimeEmployees}
          </Typography>
          <Typography variant="body2">CEO: {company.ceo}</Typography>
          <Typography variant="body2">Phone: {company.phone}</Typography>
          <Typography variant="body2">
            Location: {company.address}, {company.city}, {company.state}{" "}
            {company.zip}, {company.country}
          </Typography>
          <Typography variant="body2">
            Website:{" "}
            <Link href={company.website} target="_blank" rel="noreferrer">
              {company.website}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Metrics Summary */}
      <Divider sx={{ my: 2 }} />
      <Stack direction="row" spacing={4} justifyContent="center">
        <Typography variant="h6" color="success.main">
          +{company.changePercentage}% ↑
        </Typography>
        <Typography variant="body2">Change: ${company.change}</Typography>
        <Typography variant="body2">
          Avg Volume: {company.averageVolume}
        </Typography>
        <Typography variant="body2">Currency: {company.currency}</Typography>
      </Stack>
    </Card>
  );
};

export default CompanyProfileCard;
