// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((mydata) => {
        //console.log(mydata);
        var row = tbody.append("tr");
        Object.entries(mydata).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
function dateClick(){
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    var inputField = d3.select("#datetime").property("value");
    var filterdata=tableData;
    if (inputField){
        filterdata=filterdata.filter(x => x.datetime=== inputField);
    }
    buildTable(filterdata);
}
  d3.selectAll("#filter-btn").on("click",dateClick);
    buildTable(tableData);
