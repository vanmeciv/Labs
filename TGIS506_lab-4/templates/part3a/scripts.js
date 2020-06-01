// Chart 1
window.onload = function() {
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.elements.point.radius = 2;
  Chart.defaults.global.elements.point.hoverRadius = 12;
  Chart.defaults.global.elements.point.hoverBorderWidth = 6;
  Chart.defaults.global.elements.point.pointStyle = 'crossRot';
  // Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif;";
  Chart.defaults.global.legend.position = 'bottom';
  Chart.defaults.global.legend.backgroundColor = '#000';


  var ctx = document.getElementById("mixedChart");
  var mixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Reported COVID-19 Deaths',
              data: [11831,8697,70,7402,4403,18,208,7136,42,124,5436,700,23003,487,2403,1963,15264,18756,2042,261,701,25,7117,3954,3275,1178,139,1174,23165,4848,2477,8969,1348,1468,19,2,266,101,1438,1077,268,141,21,772,8344,877,14669,339,441,3161,754,1711,24264,121,3266,509,3045,24,391,1051,253,327,249,920,56],
              hidden: true,
              backgroundColor: ["#D32011","#007229","#cc092f","#d90012","#00B9E4","#003F87","#008751","#D52B1E","#ce1126","#032EA1","#007A5E","#002664","#fcd116","#009543","#007FFF","#002A8F","#002d62","#CE1126","#0F47AF","#3E5EB9","#078930","#CE1126","#fcd116","#4997D0","#fcd116","#000000","#CE1126","#00209F","#ff0000","#CE1126","#F77F00","#00AFCA","#000000","#E8112D","#CE1126","#00209F","#002868","#000000","#d21034","#14B53A","#cd2a3e","#C4272F","#003580","#DC143C","#008751","#D52B1E","#0038A8","#00A1DE","#D21034","#00853F","#1EB53A","#4189DD","#DE3831","#CE1126","#CC0000","#1EB53A","#a51931","#DC241F","#006A4E","#E70013","#FCDC04","#DA251D","#CF0820","#007C37","#FFD200"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939","#CE1126","#FCD116","#F9E300","#1eb53a","#E00025","#CE1126","#fecb00","#003893","#FBDE4A","#F7D618","#FFFFFF","#008337","#FFFFFF","#FFCC00","#B10C0C","#FCDD09","#FFFFFF","#000000","#FFFFFF","#FCD116","#CE1126","#FCD116","#D21034","#ffffff","#FFFFFF","#FFFFFF","#FEC50C","#922529","#FFEF00","#002868","#FFFFFF","#FFFFFF","#CE1126","#007e3a","#fcd116","#006233","#F9CF02)","#D21034","#003893","#FFFFFF","#0038A8","#CE1126","#FAD201","#12AD2B","#FDEF42","#FFFFFF","#FFFFFF","#002395","#007A3D","#FFFFFF","#00A3DD","#f4f5f8","#FFC726","#FFCE00","#FFFFFF","#D90000","#FFCD00","#007C37","#CF0820","#006400"],

              // this dataset is drawn below
              order: 2
          }, {
              label: '2017 Non-Hygeinic Population',
              data: [3290,731,41,360,233,1,152,4234,1,26,4634,530,7001,87,2026,93,4429,125,55,116,284,19,1191,102,1702,1047,16,186,6826,74,1165,21,540,27,2,2,259,16,34,249,54,31,3,7,2125,20,1429,290,198,1697,440,959,3011,10,153,86,236,2,303,173,119,5,62,533,1],
              backgroundColor: ["#D32011","#007229","#cc092f","#d90012","#00B9E4","#003F87","#008751","#D52B1E","#ce1126","#032EA1","#007A5E","#002664","#fcd116","#009543","#007FFF","#002A8F","#002d62","#CE1126","#0F47AF","#3E5EB9","#078930","#CE1126","#fcd116","#4997D0","#fcd116","#000000","#CE1126","#00209F","#ff0000","#CE1126","#F77F00","#00AFCA","#000000","#E8112D","#CE1126","#00209F","#002868","#000000","#d21034","#14B53A","#cd2a3e","#C4272F","#003580","#DC143C","#008751","#D52B1E","#0038A8","#00A1DE","#D21034","#00853F","#1EB53A","#4189DD","#DE3831","#CE1126","#CC0000","#1EB53A","#a51931","#DC241F","#006A4E","#E70013","#FCDC04","#DA251D","#CF0820","#007C37","#FFD200"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939","#CE1126","#FCD116","#F9E300","#1eb53a","#E00025","#CE1126","#fecb00","#003893","#FBDE4A","#F7D618","#FFFFFF","#008337","#FFFFFF","#FFCC00","#B10C0C","#FCDD09","#FFFFFF","#000000","#FFFFFF","#FCD116","#CE1126","#FCD116","#D21034","#ffffff","#FFFFFF","#FFFFFF","#FEC50C","#922529","#FFEF00","#002868","#FFFFFF","#FFFFFF","#CE1126","#007e3a","#fcd116","#006233","#F9CF02)","#D21034","#003893","#FFFFFF","#0038A8","#CE1126","#FAD201","#12AD2B","#FDEF42","#FFFFFF","#FFFFFF","#002395","#007A3D","#FFFFFF","#00A3DD","#f4f5f8","#FFC726","#FFCE00","#FFFFFF","#D90000","#FFCD00","#007C37","#CF0820","#006400"],

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
                padding: -2,
                fontColor: '#000',
                fontSize: 18,
                text: ["Select 'Reported COVID-19 Deaths' in legend for additional layer.","Click or hover over points and bars for tooltip"]
      				},
              legend: {
                display: true,
                labels: {
                    fontColor: '#FF5733',
                    fontStyle: 'bold'
                }
              },
      				scales: {
      					yAxes: [{
      						ticks: {
      							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
      							suggestedMin: 1,

      							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
      							suggestedMax: 25000,
                    stepSize: 5000,
                    showLines: true,
                    padding: 10,
                    fontColor: '#fff',
                    fontSize: 14,
                    fontStyle: 'bold',
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
                    fontColor: '#fff',
                    fontSize: 14,
                    fontStyle: 'bold',
                  }
                }]
      				}
      			}

  });

};
