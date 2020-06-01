// Chart 1
window.onload = function() {

  Chart.defaults.global.elements.point.radius = 2;
  Chart.defaults.global.elements.point.hoverRadius = 12;
  Chart.defaults.global.legend.position = 'bottom';

  // Chart 2
  // labels along the x-axis
  var years = ["2001-02","2002-03","2003-04","2004-05 (NHL Lockout)","2005-06","2006-07","2007-08","2008-09","2009-10","2010-11","2011-12 (NBA Lockout)","2012-13 (NHL Lockout)","2013-14","2014-15","2015-16","2016-17","2017-18","2018-19","2019-2020 Estimates"];
  // For drawing the lines
  var nflRev = [4.28,4.94,5.33,6.03,6.16,6.54,7.09,7.57,8.02,8.35,8.82,9.17,9.58,11.09,12.16,13.16,13.68,14.48,17];
  var nbaRev = [2.66,2.72,2.93,3.19,3.37,3.57,3.77,3.79,3.81,3.96,3.68,4.56,4.79,5.18,5.87,7.37,8.01,8.76, ];
  var nhlRev = [1.875,1.996,2.083,,2.178,2.44,2.75,2.82,2.93,3.09,3.37,2.63,3.7,3.98,4.1,4.43,4.86,5.09, ];
  var mlbRev = [3.62,3.88,4.27,4.73,5.11,5.48,5.82,5.9,6.14,6.36,6.81,7.1,7.86,8.39,9.03,9.46,9.9,10.37, ];


  var ctx = document.getElementById("myChartTwo");
  var myChartTwo = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          // chart style
          data: nflRev,
          label: "NFL",
          borderColor: "#013369",
          fill: false
        },
        {
          data: mlbRev,
          label: "MLB",
          borderColor: "#000089",
          fill: false
        },
        {
          data: nbaRev,
          label: "NBA",
          borderColor: "#17408B",
          fill: false
        },
        {
          data: nhlRev,
          label: "NHL",
          borderColor: "#000000",
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
            fontColor: '#000',
            fontStyle: 'bold'
        }
      },
    scales: {
              yAxes: [{
                  ticks: {
                      fontSize: 14,
                      fontColor: '#000',
                      fontStyle: 'bold',
                      stepSize: 1,
                      // Include a dollar sign in the ticks
                      callback: function(value, index, values) {
                          return '$' + value;
                      }
                  }
              }],
              xAxes: [{
                ticks: {
                    fontColor: '#000',
                    fontSize: 14,
                    fontStyle: 'bold',
                    stepSize: 1,
                    beginAtZero: true
                }
              }]
          }
      }
  });

};
