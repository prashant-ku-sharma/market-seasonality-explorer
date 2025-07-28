import React from "react";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { getColorForData } from "@/Utils/Color";

const getMonthMatrix = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matrix = [];
  let week = new Array(7).fill(null);
  let day = 1;
  for (let i = 0; i < 6; i++) {
    week = new Array(7).fill(null);
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) continue;
      if (day > daysInMonth) break;
      week[j] = day++;
    }
    matrix.push(week);
    if (day > daysInMonth) break;
  }
  return matrix;
};

const MonthView = ({ selectedDate, onSelectDate, calendarData }) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const monthMatrix = getMonthMatrix(year, month);

  return (
    <Box sx={{ padding: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mb: 1,
        }}
      >
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <Typography
            key={day}
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {day}
          </Typography>
        ))}
      </Box>

      {/* Calendar Grid */}
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1 }}
      >
        {monthMatrix.flat().map((day, idx) => {
          const date = new Date(year, month, day);
          const key = date.toISOString().split("T")[0];
          const selectedDayRecords = calendarData?.summary_records?.find(
            (record) => record[0] === dayjs(date).format("YYYY-MM-DD")
          );

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
            <Box
              key={idx}
              sx={{
                height: 100,
                borderRadius: 2,
                border: day && `1px solid ${cellColor}`,
                backgroundColor: "#fff",
                padding: 1,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                color: "#7e7e7e",
                fontSize: "0.75rem",
                cursor: day && "pointer",
              }}
              onClick={() => day && onSelectDate(new Date(year, month, day))}
            >
              {day ? (
                <span
                  style={{
                    backgroundColor: cellColor,
                    borderRadius: "8px",
                    height: 28,
                    width: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  {String(day).padStart(2, "0")}
                </span>
              ) : (
                ""
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MonthView;
