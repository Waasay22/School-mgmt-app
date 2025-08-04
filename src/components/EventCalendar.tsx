"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();
useEffect(() => {
  if (value instanceof Date) {
    const currentParam = new URLSearchParams(window.location.search).get("date");
    const selectedDateStr = value.toDateString();

    if (!currentParam || new Date(currentParam).toDateString() !== selectedDateStr) {
      router.push(`?date=${value}`);
    }
  }
}, [value, router]);

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`);
    }
  }, [value, router]);

  return <Calendar onChange={onChange} value={value} />;
};

export default EventCalendar;