import { format } from "date-fns";
const datePickerBtn = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const preMonth = document.querySelector(".prev-month-button");
const nextMonth = document.querySelector(".next-month-button");

datePickerBtn.addEventListener("click", () => {
  datePicker.classList.toggle("show");
});

function setDate(date) {
  datePickerBtn.innerText = format(date, "MMMM do, yyyy");
}
setDate(new Date());
