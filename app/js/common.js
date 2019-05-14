function createCalendar(id, year, month) {
    var elem = document.getElementById(id);
    var mon = month - 1; 
    var d = new Date(year, mon);
    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (var i = 1; i < d.getDay(); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() === mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (d.getDay() % 7 === 0) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (d.getDay() !== 0) {
      for (var i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
  }

  createCalendar("calendar", 2019, 5)
