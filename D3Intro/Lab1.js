/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* Example One: using d3 to style elements in the DOM */

d3.select('div#example1')
  .style('color', 'green');

// Todo 1 - change div backgrounds
d3.select('div#firstDiv')
  .style('background-color', '#FF0018');
d3.select('div#secondDiv')
  .style('background-color', '#FFA52C');
d3.select('div#thirdDiv')
  .style('background-color', '#FFFF41');
d3.select('div#fourthDiv')
  .style('background-color', '#008018');
d3.select('div#fifthDiv')
  .style('background-color', '#0000F9');
d3.select('div#lastDiv')
  .style('background-color', '#86007D');

/* 
  Example Two: 
  Use d3 to load JSON data: Load the data from file sales.json
  Display the conference name in an element for each item.  
*/

d3.json('../data/sales.json')
  .then((data) => {
    d3.select('#sales-data')
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      // set the text for each div
      // add a style for each div
  })


/*
  TODO 2:
  Load the monthly sales data. Display the month and the sales amount.
  Stretch: Make each month a different color. 
*/

d3.json('../data/monthlySales.json');

/* 
  Challenge:
  Display the distance data. Show the date as text and the distance as 
  the width of each element. 
  Stretch: Format the date as "Day Month date, Year"
*/

d3.json('../data/distanceCovered.json');
