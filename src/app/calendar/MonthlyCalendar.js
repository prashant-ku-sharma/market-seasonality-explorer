import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { getColorForData } from "@/Utils/Color";
import { Description } from "@mui/icons-material";

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
          if (day === 10) console.log(cellColor, selectedDayRecords);

          return (
            <Box
              key={idx}
              sx={{
                height: 100,
                borderRadius: 2,
                border: day && `1px solid ${cellColor}`,
                backgroundColor: "#fff",
                padding: 1,
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "flex-end",
                color: "#5e5d5dff",
                fontSize: "0.75rem",
                cursor: day && "pointer",
              }}
              onClick={() => day && onSelectDate(new Date(year, month, day))}
            >
              {day ? (
                <>
                  {/* Date Badge */}
                  <Box
                    sx={{
                      backgroundColor: cellColor,
                      borderRadius: 1.5,
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      color:
                        selectedDayRecords &&
                        (selectedDayRecords[1] ||
                          selectedDayRecords[2] ||
                          selectedDayRecords[3] ||
                          selectedDayRecords[4]) &&
                        "#fff",
                    }}
                  >
                    {String(day).padStart(2, "0")}
                  </Box>{" "}
                  <br />
                  {selectedDayRecords &&
                  (selectedDayRecords[1] ||
                    selectedDayRecords[2] ||
                    selectedDayRecords[3] ||
                    selectedDayRecords[4]) ? (
                    <Box>
                      {/* P&L Text */}
                      <Typography
                        variant="caption"
                        fontWeight={600}
                        sx={{ mt: 0.5, color: cellColor }}
                      >
                        {selectedDayRecords[4] > 0
                          ? `+₹${selectedDayRecords[4]}`
                          : selectedDayRecords[4] < 0
                          ? `-₹${selectedDayRecords[4]}`
                          : "-"}
                      </Typography>

                      {/* Icons */}
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Description sx={{ fontSize: 14 }} />
                        <Typography variant="caption">
                          {selectedDayRecords[2]}
                        </Typography>
                      </Stack>
                    </Box>
                  ) : null}
                </>
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
