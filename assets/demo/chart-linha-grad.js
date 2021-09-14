var ctx = document.getElementById('chart_1').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, 'rgba(0, 0, 0, 0.07)');
gradientStroke.addColorStop(1, 'rgba(0, 0, 0, 0.07)');

var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(255, 0, 0, 0.70)");
gradientFill.addColorStop(1, "rgba(255, 0, 0, 0.70)");

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["DIA 1", "DIA 2", "DIA 3", "DIA 4", "DIA 5", "DIA 6", "DIA 7" , "DIA 8", "DIA 9", "DIA 10", "DIA 11", "DIA 12", "DIA 13", "DIA 14", "DIA 15"],
        datasets: [{
            label: "Erros",
            borderColor: gradientStroke,
            
            pointHoverBackgroundColor: "rgba(255, 0, 0, 0.70)",
            pointHoverBorderColor: "rgba(255, 0, 0, 0.70)",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [6100, 7120, 2150, 2170, 370, 1180, 1160,6100, 7120, 2150, 2170, 7120, 370, 1160,3232],
            
        }]
    },

    options: {
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "right"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});