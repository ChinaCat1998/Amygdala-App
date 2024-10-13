
/* import '..App.css'; */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import arrowRight from '../assets/icons/next-arrow.jpg';
import arrowLeft from '../assets/icons/prev-arrow.jpg'



const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (day: any) => {
    setSelectedDate(day);
    navigate(`/journal-entry/${format(day, 'yyyy-MM-dd')}`);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
// User story - I want a date to be clickable I there is a journal post associated with that date
// Acceptence Criteria: When journal posts are visible in the calendar as links and are clickable
// Need to add useEffect to pull blog posts from the database
// the posts should be limited to the user and the current calendar dates visible
// 

    return (
      <div className="header row flex-middle">
        <div className="col col-start" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <div className="icon">
            <img src={arrowLeft} alt="iconPrevious" />
          </div>
        </div>

        <div className="col col-center">
          <span className="col-month">{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <div className="icon"><img src={arrowRight} alt="iconNext" /></div>
        </div>
      </div>
    );
  };

  const renderMoods = () => {
    return (
      <>
        <h2 className="mood-legend-title">Mood Legend</h2>
        <div className="mood-legend">
            <div className="card"> 
              <div className="color great"></div>
              <div className="caption">Great</div>
            </div>
            <div className="card"> 
              <div className="color good"></div>
              <div className="caption">Good</div>
            </div>
            <div className="card"> 
              <div className="color ok"></div>
              <div className="caption">OK</div>
            </div>
            <div className="card"> 
              <div className="color bad"></div>
              <div className="caption">Bad</div>
            </div>
            <div className="card"> 
              <div className="color great"></div>
              <div className="caption">Awful</div>
            </div>
        </div>
      </>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "eee";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
// add a class to the cell div for the mood of the journal entry
// add a condition that if the date has a blog post the number is wrapped in a link to the Journal Entry page. 
// If there is no Journal Entry the number is not clickable.
        days.push(
          <div
            className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""}`}
            key={i}
            onClick={() => handleDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderMoods()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
