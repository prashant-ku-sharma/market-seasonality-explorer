import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { EventNote } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Sidebar from "./SideBar";
import dayjs from "dayjs";

const DayView = ({ selectedDate, setSelectedDate, calendarData }) => {
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const selectedDayRecords = calendarData.summary_records.find(
    (record) => record[0] === dayjs(selectedDate).format("YYYY-MM-DD")
  );

  return (
    <Box sx={{ display: "flex", maxHeight: "75vh", backgroundColor: "#fff" }}>
      <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <Box sx={{ flex: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CalendarMonthIcon fontSize="small" />
            {formattedDate}
          </Typography>
        </Box>

        {/* Empty State */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, mt: 6 }}>
            Nothing added yet!
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Begin documenting your trades to analyse them further.
          </Typography>
          <Button variant="contained" startIcon={<EventNote />}>
            Add Note
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DayView;
