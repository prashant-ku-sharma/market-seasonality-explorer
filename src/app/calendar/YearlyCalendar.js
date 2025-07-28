import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styles } from "./styles";
import dayjs from "dayjs";
import { getColorForData } from "@/Utils/Color";

const YearlyCalendar = ({ onSelectDate, selectedDate, calendarData }) => {
  const dataMap = {}; // mock data or FMP API processed data
  const startMonth = 3;
  const startYear = selectedDate.getFullYear();
  const endYear = selectedDate.getFullYear() + 1;

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      gap={2}
      padding={1}
    >
      {[...Array(12)].map((_, i) => {
        const month = (startMonth + i) % 12;
        const year = month < 3 ? endYear : startYear;
        const days = daysInMonth(month, year);
        return (
          <Box key={month} sx={{ width: "250px" }}>
            <Typography variant="subtitle1" gutterBottom>
              {new Date(year, month).toLocaleString("default", {
                month: "long",
              })}
            </Typography>
            <Grid container spacing={0.5}>
              {[...Array(days)].map((_, j) => {
                const date = new Date(year, month, j + 1);
                const selectedDayRecords = calendarData?.summary_records?.find(
                  (record) => record[0] === dayjs(date).format("YYYY-MM-DD")
                );

                const key = date.toISOString().split("T")[0];
                let cellColor = getColorForData(null);
                if (selectedDayRecords) {
                  const ordersCount = selectedDayRecords[2];
                  const realizedPnl = selectedDayRecords[4];
                  if (realizedPnl > 0) {
                    // Profit
                    cellColor = getColorForData({ profit: realizedPnl });
                  } else if (realizedPnl < 0) {
                    // Loss
                    cellColor = getColorForData({
                      loss: Math.abs(realizedPnl),
                    });
                  } else if (ordersCount > 0) {
                    // Orders
                    cellColor = getColorForData({
                      order: ordersCount,
                    });
                  }
                }

                return (
                  <Grid
                    item
                    xs={1.71} // 7 columns
                    key={key}
                    onClick={() => onSelectDate(date)}
                    sx={{ ...styles.dayStyle, backgroundColor: cellColor }}
                  >
                    {j + 1}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
      <Box sx={{ width: "250px" }} />
      <Box sx={{ width: "250px" }} />
      <Box sx={{ width: "250px" }} />
    </Box>
  );
};

export default YearlyCalendar;
