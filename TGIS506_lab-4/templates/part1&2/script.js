
// labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        // chart style
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: asia,
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        data: northAmerica,
        label: "North America",
        borderColor: "#c45850",
        fill: false
      },
      {
        data: oceana,
        label: "Oceana",
        borderColor: "#ff8c00",
        fill: false
      }
    ]
  }
});

var countries = ["China", "South Korea", "Italy", "Iran", "Japan", "France", "Spain", "United States", "Hong Kong"];
var mort_rates = [3.9, 0.3, 3.8, 3.7, 1.9, 1.6, 0.9, 6.9, 1.9]

var ctx = document.getElementById("myChartTwo");
var myChartTwo = new Chart(ctx, {
  type: 'bar',
    data: {
      labels: countries,
      datasets: [
        {
          label: "Percent of reported cases that have been fatal",
          backgroundColor: "#3e95cd",
          data: mort_rates
        }
      ]
    },
    options: {
      legend: { display: false },
      }
    });


var pokemonTypes = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
var typeNums = [69, 30, 19, 43, 16, 26, 46, 4, 31, 69, 31, 23, 96, 27, 56, 43, 26, 111]

var ctx = document.getElementById("pokemon");
var pokemon = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: pokemonTypes,
    datasets: [
      {
        label: "Number of Pokemon",
        backgroundColor: "#3e95cd",
        data: typeNums
      }
    ]
  },
  options: {
    legend: { display: false },
    }
  });
