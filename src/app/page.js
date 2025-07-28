"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Calendar from "@/components/Calendar";
import { HeatmapCell } from "@/components/HeatmapCell";
import DashboardPanel from "@/components/DashboardPanel";
import Orderbook from "@/components/OrderBook";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
        {/* <HeatmapCell date={new Date()} volatility={0.5} onClick={() => {}} /> */}
        {/* <DashboardPanel date={new Date()} data={{}} /> */}
        {/* <Orderbook /> */}
      {/* </main> */}
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
