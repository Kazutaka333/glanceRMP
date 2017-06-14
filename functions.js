// 2017/07/14
function addColumns() {

  var table = document.querySelectorAll("table[id^='SSR_CLSRCH_MTG1']");

  for (var i = 0; i < table.length; i++) {
    var thead = table[i].querySelector("table tbody tr");
    var th = thead.firstElementChild;
    th.textContent = "Rate";
    thead.appendChild(th);

    var row = table[i].querySelector("tr[id^=trSSR_CLSRCH_MTG1]");
    var td = row.firstElementChild;
    td.textContent = "3.0";
    row.appendChild(td);
  }

}


addColumns();