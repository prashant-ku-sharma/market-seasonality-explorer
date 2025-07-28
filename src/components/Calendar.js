import React, { useState } from "react";
import dayjs from "dayjs";
import { Grid, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({ onDateSelect }) {
  const [viewDate, setViewDate] = useState(dayjs());

  const startOfMonth = viewDate.startOf("month");
  const endOfMonth = viewDate.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const calendarDays = [];
  let current = startDate;
  while (current.isBefore(endDate) || current.isSame(endDate)) {
    calendarDays.push(current);
    current = current.add(1, "day");
  }

  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton onClick={() => setViewDate(viewDate.subtract(1, "month"))}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">{viewDate.format("MMMM YYYY")}</Typography>
        <IconButton onClick={() => setViewDate(viewDate.add(1, "month"))}>
          <ArrowForward />
        </IconButton>
      </Grid>

      <Grid container spacing={1}>
        {DAYS.map((day) => (
          <Grid item xs={1.7} key={day}>
            <Typography align="center">{day}</Typography>
          </Grid>
        ))}

        {calendarDays.map((date) => (
          <Grid
            item
            xs={1.7}
            key={date.toString()}
            onClick={() => onDateSelect(date.format("YYYY-MM-DD"))}
            sx={{
              padding: 1,
              border: "1px solid #ccc",
              backgroundColor: date.isSame(dayjs(), "day") ? "#e3f2fd" : "#fff",
              cursor: "pointer",
            }}
          >
            <Typography variant="body2" align="center">
              {date.date()}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
