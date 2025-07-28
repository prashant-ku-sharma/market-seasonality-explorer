import axios from "axios";
import config from "../../config";
import CalendarMock from "./CalendarMock";

export class FMPService {
  static getCompanyProfile(symbol) {
    return axios.get(
      `${config.FMP_SERVICE}/stable/profile?symbol=${symbol}&apikey=${config.FMP_API_KEY}`
    );
  }

  static async getFMPCalendar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CalendarMock);
      }, 500);
    });
  }
}
