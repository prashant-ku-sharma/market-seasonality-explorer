import CalendarMock from "./CalendarMock";

export class FMPService {
  static async getFMPCalendar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CalendarMock);
      }, 500);
    });
  }
}
