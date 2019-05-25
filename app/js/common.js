let calendar = document.querySelector('#calendar');
let days = ['пн', 'вт', 'ср', 'чт', 'пн', 'сб', 'нд'];
let table = document.createElement('table');
let header = document.createElement('tr');
table.append(header);

for (const day of days) {
    header.insertAdjacentHTML('beforeend', `<th>${day}</th>`)
  }
  
function getDaysInMonth(m, y) {
  return /4|6|9|11/.test(m)?30:m==2?(!(y%4)&&y%100)||!(y%400)?29:28:31;
}

function createCalendar(id, year, month) {
  let date = new Date(year, month-1);
  let daysInMonth = getDaysInMonth(month, year);
  let nextDayToAdd = 1 -  date.getDay();
   
  while (nextDayToAdd <= daysInMonth) {
    let week = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const day = document.createElement('td');
      if (nextDayToAdd > 0 && nextDayToAdd <= daysInMonth) {
        day.innerHTML = nextDayToAdd;
      }
      nextDayToAdd++;
      week.appendChild(day);
    }
    table.appendChild(week);
  }
  
  return table;
}
  
calendar.appendChild(createCalendar("calendar", 2019, 2));
