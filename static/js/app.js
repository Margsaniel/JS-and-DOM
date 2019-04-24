// from data.js
var tbody = d3.select("tbody");

console.log(data);

// d3.json(data1, function (error,data) {

//     function tabulate(data, columns) {
//           var table = d3.select('body').append('table')
//           var thead = table.append('thead')
//           var	tbody = table.append('tbody');
  
//           // append the header row
//           thead.append('tr')
//             .selectAll('th')
//             .data(columns).enter()
//             .append('th')
//               .text(function (column) { return column; });
  
//           // create a row for each object in the data
//           var rows = tbody.selectAll('tr')
//             .data(data)
//             .enter()
//             .append('tr');
  
//           // create a cell in each row for each column
//           var cells = rows.selectAll('td')
//             .data(function (row) {
//               return columns.map(function (column) {
//                 return {column: column, value: row[column]};
//               });
//             })
//             .enter()
//             .append('td')
//               .text(function (d) { return d.value; });
  
//         return table;
//       }
  
//       // render the table(s)
//       tabulate(data, ['Date', 'City', 'State', 'Country', 'Shape', 'Durations', 'Comments']); // 2 column table
  
// });

// YOUR CODE HERE!
// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(UFOReport) {
  console.log(UFOReport);
});

// // // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
});

// // // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");

  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");

  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
  });
});

// // // Step 5: Use d3 to update each cell's text with
// // // weather report values (weekday, date, high, low)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});