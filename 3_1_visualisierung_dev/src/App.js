import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import './App.css';

import eventData from "./schedule_lp.json"; // Your JSON file

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const formattedEvents = eventData.map((item) => ({
      title: item.label,
      start: item.start,
      end: item.end,
      backgroundColor: item.color,
      borderColor: item.color,
      display: 'block'
    }));
    setEvents(formattedEvents);
  }, []);
  
  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        height="auto"
      />
    </div>
  );
}

export default App;
