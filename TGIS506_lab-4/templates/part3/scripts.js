// Chart 1
window.onload = function() {
  var ctx = document.getElementById("mixedChart");
  var mixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Reported COVID-19 Deaths',
              data: [11831,8697,70,7402,4403,18,208,7136,42,124,5436,700,23003,487,2403,1963,15264,18756,2042,261,701,25,7117,3954,3275,1178,139,1174,23165,4848,2477,8969,1348,1468,19,2,266,101,1438,1077,268,141,21,772,8344,877,14669,339,441,3161,754,1711,24264,121,3266,509,3045,24,391,1051,253,327,249,920,56],
              // this dataset is drawn below
              order: 2
          }, {
              label: '2017 Non-Hygeinic Population',
              data: [3290,731,41,360,233,1,152,4234,1,26,4634,530,7001,87,2026,93,4429,125,55,116,284,19,1191,102,1702,1047,16,186,6826,74,1165,21,540,27,2,2,259,16,34,249,54,31,3,7,2125,20,1429,290,198,1697,440,959,3011,10,153,86,236,2,303,173,119,5,62,533,1],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          }],
          labels: ["Afghanistan","Algeria","Angola","Armenia","Azerbaijan","Belize","Benin","Bolivia","Burundi","Cambodia","Cameroon","Chad","Colombia","Congo (Brazzaville)","Congo (Kinshasa)","Cuba","Dominican Republic","Egypt","El Salvador","Eswatini","Ethiopia","Gambia","Ghana","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Indonesia","Iraq","Ivory Coast", "Kazakhstan","Kenya","Kyrgyzstan","Laos","Lesotho","Liberia","Malawi","Maldives","Mali","Mauritania","Mongolia","Namibia","Nepal","Nigeria","Paraguay","Philippines","Rwanda","Sao Tome and Principe","Senegal","Sierra Leone","Somalia","South Africa","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tunisia","Uganda","Vietnam","Yemen","Zambia","Zimbabwe"]},
      options: {

              responsive: true,
      				title: {
      					display: true,
      					text: 'Min and Max Settings'
      				},
      				scales: {
      					yAxes: [{
      						ticks: {
      							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
      							suggestedMin: 1,

      							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
      							suggestedMax: 25000,
                    stepSize: 500,
                    showLines: true,
                    padding: 10,
                    beginAtZero:true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
      						}
      					}],
                xAxes: [{
                  ticks: {
                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                    suggestedMin: 1,

                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                    suggestedMax: 25000,
                    stepSize: 1,
                    showLines: true,
                    padding: 5,
                    minRotation: 90,
                    maxRotation: 90,
                    fontSize: 8
                  }
                }]
      				}
      			}

  });

};









//
//
// // Chart 2
// // labels along the x-axis
// var years = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
// // For drawing the lines
// var nflRev = [4.28,4.94,5.33,6.03,6.16,6.54,7.09,7.57,8.02,8.35,8.82,9.17,9.58,11.09,12.16,13.16,13.68,14.48];
// var boxOfficeRev = [8.11,9.17,9.21,9.37,8.84,9.21,9.66,9.63,10.6,10.2,10.8,10.9,10.4,11.1,11.4,11.1,11.9];
// // var deficitToGDP = [,,,,,,,,,];
// // var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
// // var northAmerica = [6,3,2,2,7,26,82,172,312,433];
// // var oceana = [3,3,2,2,2,2,6,13,30,57];
//
// var ctx = document.getElementById("myChartTwo");
// var myChartTwo = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: years,
//     datasets: [
//       {
//         // chart style
//         data: nflRev,
//         label: "NFL Revenue",
//         borderColor: "#3e95cd",
//         fill: false
//       },
//       {
//         data: boxOfficeRev,
//         label: "Hollywood Box Office Revenue",
//         borderColor: "#8e5ea2",
//         fill: false
//       }
//     ]
//   },
//   options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     // Include a dollar sign in the ticks
//                     callback: function(value, index, values) {
//                         return '$' + value;
//                     }
//                 }
//             }]
//         }
//     }
// });

//
// // Chart 3
// // labels along the x-axis
// var ages = [0,10,20,30,40,50,60,70,80,90,100];
// // For drawing the lines
// var wuhan = [0.4,0.4,4.5,13.1,15.6,22.0,26.5,12.6,4.5,0.5];
// var hubei = [0.4,0.7,6.6,15.4,18.3,23.4,21.4,10.1,3.3,0.3];
// var china = [0.9,1.2,8.1,17.0,19.2,22.4,8.8,2.9,0.3];
// // var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
// // var northAmerica = [6,3,2,2,7,26,82,172,312,433];
// // var oceana = [3,3,2,2,2,2,6,13,30,57];
//
// var ctx = document.getElementById("myChartThree");
// var myChartThree = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ages,
//     datasets: [
//       {
//         // chart style
//         data: wuhan,
//         label: "Wuhan",
//         borderColor: "#3e95cd",
//         fill: false
//       },
//       {
//         data: hubei,
//         label: "Hubei",
//         borderColor: "#8e5ea2",
//         fill: false
//       },
//       {
//         data: china,
//         label: "China",
//         borderColor: "#ff0000",
//         fill: false
//       }
//     ]
//   },
//   options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                   min: 0,
//                   max: 100,
//                   callback: function(value) {
//                       return value + "%"
//                   }
//                 }
//             }]
//         }
//     }
// });
//
// // Chart 4
// new Chart(document.getElementById("myChartFour"), {
//     type: 'radar',
//     data: {
//       labels: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
//       datasets: [
//         {
//           label: "Confirmed Cases (44,672)",
//           fill: true,
//           backgroundColor: "rgba(179,181,198,0.2)",
//           borderColor: "rgba(179,181,198,1)",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(179,181,198,1)",
//           data: [416,549,3619,7600,8571,10008,8583,3918,1408]
//         }, {
//           label: "Deaths (1,023)",
//           fill: true,
//           backgroundColor: "rgba(255,99,132,0.2)",
//           borderColor: "rgba(255,99,132,1)",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(255,99,132,1)",
//           pointBorderColor: "#fff",
//           data: [0,1,7,18,38,130,309,312,208]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Age Distribution in China (Click "Confirmed Cases (44,672)" for more context)'
//       }
//     }
// });
