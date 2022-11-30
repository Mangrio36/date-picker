import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

const datePickerBtn = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");
const preMonth = document.querySelector(".prev-month-button");
const nextMonth = document.querySelector(".next-month-button");
let currentDate = new Date();
const dateGrid = document.querySelector(".date-picker-grid-dates");

datePickerBtn.addEventListener("click", () => {
  datePicker.classList.toggle("show");
  const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate);
  currentDate = selectedDate;
  setupDatePicker(selectedDate);
});
function setDate(date) {
  datePickerBtn.innerText = format(date, "MMMM do, yyyy");
  datePickerBtn.dataset.selectedDate = getUnixTime(date);
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(currentDate, "MMMM-yyyy");
  setupDates(selectedDate);
}
function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate));
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate));
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
  dateGrid.innerHTML = "";
  dates.forEach((date) => {
    const dateElement = document.createElement("button");
    dateElement.classList.add("date");
    dateElement.innerText = date.getDate();
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date");
    }
    if (isSameDay(date, selectedDate)) {
      dateElement.classList.add("selected");
    }
    dateGrid.appendChild(dateElement);
    dateElement.addEventListener("click", () => {
      setDate(date);
      datePicker.classList.remove("show");
    });
  });
}

nextMonth.addEventListener("click", () => {
  const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate);
  currentDate = addMonths(currentDate, 1);
  setupDatePicker(selectedDate);
});
preMonth.addEventListener("click", () => {
  const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate);
  currentDate = subMonths(currentDate, 1);
  setupDatePicker(selectedDate);
});

setDate(new Date());
