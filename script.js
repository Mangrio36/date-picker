import { format, getUnixTime, fromUnixTime } from "date-fns";
const datePickerBtn = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");
const preMonth = document.querySelector(".prev-month-button");
const nextMonth = document.querySelector(".next-month-button");

datePickerBtn.addEventListener("click", () => {
  datePicker.classList.toggle("show");
  const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate);
  setupDatePicker(selectedDate);
});

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(selectedDate, "MMMM-yyyy");
}
function setDate(date) {
  datePickerBtn.innerText = format(date, "MMMM do, yyyy");
  datePickerBtn.dataset.selectedDate = getUnixTime(date);
}
setDate(new Date());
