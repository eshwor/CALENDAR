/**
  Custom Script File
*/

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.querySelector('#year');
let selectMonth = document.querySelector('#month');

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.querySelector('#monthAndYear');
monthAndYear.innerHTML = months[currentMonth] + " / " + currentYear; //Display Month and Year on the top heading

Calendar(currentMonth, currentYear);

//FUNCTION DEFINE
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    Calendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    Calendar(currentMonth, currentYear);
}

function goToFunction() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    Calendar(currentMonth, currentYear);

}

//Main Calendar Function
function Calendar(month, year){
  let firstDay = new Date(year, month).getDay();
  let totalDays = 32 - new Date(year, month, 32).getDate();

  let tbl = document.querySelector('#main-Calendar');
  tbl.innerHTML = "";

  //Now Fill Up Dates
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
          if(i === 0 && j < firstDay) {
            let cell = document.createElement('td');
            let cellText = document.createTextNode('');
            cell.appendChild(cellText);
            row.appendChild(cell);

          } else if(date > totalDays){
            break;
          } else {
            let cell = document.createElement('td');
            let cellText = document.createTextNode(date);

            if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
              cell.classList.add('today-date-selected'); //select today's date
            }

            if( j === 6 || j === 0 ){
              cell.classList.add('weenkend'); //add weekend class only on weekends
            } else {
              cell.classList.add('weekday');
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;
          }
      }
      tbl.appendChild(row); //Kepp add rows
    }

}//End of showCalendar
