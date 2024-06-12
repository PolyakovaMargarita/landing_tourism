import React, { FC, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";
import { IntlProvider } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import s from "./MyCalendar.module.css";
import {isNotUndefined} from "../../helpers/hoc/isNotUndefined";

interface MyCalendarProps {
  data: any;
}

const MyCalendar: FC<MyCalendarProps> = ({ data }) => {
  const [locale, setLocale] = useState<string>("en-US"); // default locale
  const [timeZone, setTimeZone] = useState<string>("UTC"); // default time zone
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (isNotUndefined) {
      setLocale(navigator.language);
      setTimeZone(moment.tz.guess());
    }
  }, []);

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
