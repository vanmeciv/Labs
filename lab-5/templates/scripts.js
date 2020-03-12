// labels along the x-axis
var years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
// For drawing the lines
var deficit = [-236,-128,158,378,413,318,248,161,459,1413,1294,1300,1077,680,485,442,585,665,779,984,1083,966];
var debtIncrease = [18,133,421,555,596,554,578,501,1017,1632,1905,1229,1276,672,1086,327,1423,672,1217,1314,1281,1276];
// var deficitToGDP = [,,,,,,,,,];
// var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
// var northAmerica = [6,3,2,2,7,26,82,172,312,433];
// var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        // chart style
        data: deficit,
        label: "Deficit",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: debtIncrease,
        label: "Debt Increase",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        }
    },
        tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(142, 94, 162)',
                        backgroundColor: 'rgb(142, 94, 162)'
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#8e5ea2';
                }
            }
        }
});


// labels along the x-axis
var years = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
// For drawing the lines
var nflRev = [4.28,4.94,5.33,6.03,6.16,6.54,7.09,7.57,8.02,8.35,8.82,9.17,9.58,11.09,12.16,13.16,13.68,14.48];
var boxOfficeRev = [8.11,9.17,9.21,9.37,8.84,9.21,9.66,9.63,10.6,10.2,10.8,10.9,10.4,11.1,11.4,11.1,11.9];
// var deficitToGDP = [,,,,,,,,,];
// var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
// var northAmerica = [6,3,2,2,7,26,82,172,312,433];
// var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChartTwo");
var myChartTwo = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        // chart style
        data: nflRev,
        label: "NFL Revenue",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: boxOfficeRev,
        label: "Hollywood Box Office Revenue",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        }
    }
});
