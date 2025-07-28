"use client";
import React, { useEffect, useState } from "react";
import YearlyCalendar from "./YearlyCalendar";
import MonthlyCalendar from "./MonthlyCalendar";
import DailyCalendar from "./DailyCalendar";
import { Box, IconButton, Typography } from "@mui/material";
import {
  CalendarMonth,
  DensityMedium,
  GridView,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { styles } from "./styles";
import TopBar from "@/components/TopBar";
import { FMPService } from "@/service/FMPService";
import ColorLegendBar from "@/components/ColorLegendBar";

const CalendarWrapper = () => {
  const [view, setView] = useState("year"); // year | month | day
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    FMPService.getFMPCalendar().then(({ response }) => {
      setCalendarData(response);
    });
  }, []);

  //   useEffect(() => {
  //     const handleKeyDown = (e) => {
  //       console.log(e.key, selectedDate, view);

  //       switch (e.key) {
  //         case "ArrowLeft":
  //         case "ArrowUp":
  //           goBack();
  //           break;
  //         case "ArrowRight":
  //         case "ArrowDown":
  //           goForward();
  //           break;
  //         default:
  //           return;
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDown);
  //     return () => window.removeEventListener("keydown", handleKeyDown);
  //   }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setView("day");
  };

  const goBack = () => {
    if (view === "month" || view === "day") {
      const nextMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() - 1,
        1
      );
      setSelectedDate(nextMonth);
    } else {
      const nextYear = new Date(
        selectedDate.getFullYear() - 1,
        selectedDate.getMonth(),
        1
      );
      setSelectedDate(nextYear);
    }
  };

  const goForward = () => {
    if (view === "month" || view === "day") {
      const nextMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        1
      );
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      if (
        nextMonth.getFullYear() > currentYear ||
        (nextMonth.getFullYear() === currentYear &&
          nextMonth.getMonth() > currentMonth)
      ) {
        setSelectedDate(new Date(currentYear, currentMonth, 1));
      } else {
        setSelectedDate(nextMonth);
      }
    } else {
      const nextYear = new Date(
        selectedDate.getFullYear() + 1,
        selectedDate.getMonth(),
        1
      );
      const currentYear = new Date().getFullYear();
      if (nextYear.getFullYear() > currentYear) {
        setSelectedDate(new Date(currentYear, 0, 1));
      } else {
        setSelectedDate(nextYear);
      }
    }
  };

  return (
    <>
      <TopBar />

      <Box
        sx={{
          maxWidth: "96%",
          margin: "20px auto 20px",
          paddingBottom: 2,
          background: "#FFF",
          borderRadius: 2,
        }}
        elevation={3}
      >
        {/* Month Controls */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            padding: "5px 12px",
            borderBottom: "1px solid #0000001a",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mr: 1, minWidth: 100 }}
            >
              {view === "year" &&
                `${selectedDate.getFullYear()}-${
                  selectedDate.getFullYear() + 1
                }`}
              {view === "month" &&
                selectedDate.toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}
              {view === "day" &&
                selectedDate.toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}
            </Typography>
            <IconButton onClick={goBack}>
              <KeyboardArrowLeftRounded
                sx={{ border: "1px solid #0000008a", borderRadius: "30%" }}
              />
            </IconButton>
            <IconButton onClick={goForward}>
              <KeyboardArrowRightRounded
                sx={{ border: "1px solid #0000008a", borderRadius: "30%" }}
              />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              sx={styles.calenderViewIconButton}
              onClick={() => {
                setView("year");
                setSelectedDate(new Date());
              }}
            >
              <GridView sx={styles.calenderViewIcon} />
            </IconButton>
            <IconButton
              sx={styles.calenderViewIconButton}
              onClick={() => {
                setView("month");
                setSelectedDate(new Date());
              }}
            >
              <CalendarMonth sx={styles.calenderViewIcon} />
            </IconButton>
            <IconButton
              sx={styles.calenderViewIconButton}
              onClick={() => {
                setView("day");
                setSelectedDate(new Date());
              }}
            >
              <DensityMedium sx={styles.calenderViewIcon} />
            </IconButton>
          </Box>
        </Box>

        {view === "year" && (
          <>
            <YearlyCalendar
              selectedDate={selectedDate}
              onSelectDate={handleDateSelect}
              calendarData={calendarData}
            />
            <ColorLegendBar />
          </>
        )}
        {view === "month" && (
          <MonthlyCalendar
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
            calendarData={calendarData}
          />
        )}
        {view === "day" && (
          <DailyCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            calendarData={calendarData}
          />
        )}
      </Box>
    </>
  );
};
export default CalendarWrapper;
