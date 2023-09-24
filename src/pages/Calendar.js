import React, { useState } from "react";
import Sidebar from "../components/SideBar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  // Function to generate an array of days in the selected month
  const getDaysInMonth = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    return daysArray;
  };

  // Function to handle date selection
  const handleDateClick = (day) => {
    // Handle date selection logic here
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
    );
    setIsAddingEvent(true); // Start adding an event when a date is clicked
  };

  // Function to add a new event
  const addEvent = () => {
    if (newEvent && selectedDate) {
      const updatedEvents = [
        ...events,
        { date: selectedDate, event: newEvent },
      ];
      setEvents(updatedEvents);
      setNewEvent("");
      setIsAddingEvent(false);
    }
  };

  // Function to get events for the selected month
  const getEventsForSelectedMonth = () => {
    return events.filter((event) => {
      const eventDate = event.date;
      return (
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getFullYear() === selectedDate.getFullYear()
      );
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1,
                    1
                  )
                )
              }
              className="text-blue-500 hover:text-blue-700"
            >
              Previous Month
            </button>
            <h2 className="text-xl font-semibold">
              {selectedDate.toLocaleString("default", { month: "long" })}{" "}
              {selectedDate.getFullYear()}
            </h2>
            <button
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1,
                    1
                  )
                )
              }
              className="text-blue-500 hover:text-blue-700"
            >
              Next Month
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-gray-600 font-semibold"
              >
                {day}
              </div>
            ))}
            {getDaysInMonth().map((day) => (
              <div
                key={day}
                className={`cursor-pointer relative p-2 rounded-full ${
                  selectedDate.getDate() === day
                    ? "bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
                {getEventsForSelectedMonth().map(
                  (event) =>
                    event.date.getDate() === day && (
                      <div
                        key={event.event}
                        className="absolute top-0 right-0 -mt-4 mr-1 px-1 bg-blue-500 text-white text-xs rounded-full"
                      >
                        {event.event}
                      </div>
                    )
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {isAddingEvent ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="border rounded p-2 w-full"
                  placeholder="Add an event..."
                  value={newEvent}
                  onChange={(e) => setNewEvent(e.target.value)}
                />
                <button
                  onClick={addEvent}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingEvent(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Event
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
