import React, { useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ selectedDate, setSelectedDate }) => {
  useEffect(() => {
    const element = document.getElementById(`id-${selectedDate.getDate()}`);
    element.scrollIntoView({ behavior: "smooth" });
  }, [selectedDate]);

  const getAllDatesInMonth = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dateObj = new Date(year, month, i);
      dates.push({
        dateObj: dateObj,
        day: dateObj.toLocaleDateString("en-GB", { weekday: "long" }),
        date: dateObj.toLocaleDateString("en-GB", { day: "numeric" }),
      });
    }

    return dates;
  };

  return (
    <Box
      sx={{
        width: 280,
        overflowY: "auto",
        bgcolor: "#fff",
        borderRight: "1px solid #e0e0e0",
        paddingBottom: 2,
        px: 1,
      }}
    >
      <List sx={{ paddingTop: 0 }}>
        {getAllDatesInMonth().map((dateObj, index) => (
          <ListItem
            key={index}
            onClick={() => setSelectedDate(dateObj.dateObj)}
            sx={{ borderBottom: "1px solid #e0e0e0", cursor: "pointer" }}
            id={`id-${dateObj.dateObj.getDate()}`}
          >
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    padding: "12px",
                    borderRadius: 2,
                    border:
                      selectedDate.getDate() === dateObj.dateObj.getDate() &&
                      "1px solid #e0e0e0",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#eaebed",
                      backgroundColor: "#eaebed",
                      borderRadius: "8px",
                      height: 28,
                      width: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                    }}
                  >
                    {dateObj.date}
                  </span>
                  <span style={{ fontSize: 12 }}>{dateObj.day}</span>
                </Box>
              }
              primaryTypographyProps={{ fontWeight: 500 }}
              secondaryTypographyProps={{
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
