// @ts-ignore
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";
import { IntlProvider } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import s from "./MyCalendar.module.css";

interface MyCalendarProps {
    data: any;
}

const MyCalendar: FC<MyCalendarProps> = ({ data }) => {
  const locale = navigator.language;
  const timeZone = moment.tz.guess();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <IntlProvider locale={locale}>
      <div className={s.inputBlock}>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="MMM dd"
          locale={locale}
          className={s.input}
          placeholderText="Select a date range"
        />
      </div>
    </IntlProvider>
  );
};

export default MyCalendar;
