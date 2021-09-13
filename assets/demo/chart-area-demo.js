var ctx = document.getElementById('myAreaChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, 'rgba(0, 0, 0, 0.07)');
gradientStroke.addColorStop(1, 'rgba(0, 0, 0, 0.07)');

var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(255, 0, 0, 0.70)");
gradientFill.addColorStop(1, "rgba(255, 0, 0, 0.79)");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["DIA 1", "DIA 2", "DIA 3", "DIA 4", "DIA 5", "DIA 6", "DIA 7" , "DIA 8", "DIA 9", "DIA 10", "DIA 11", "DIA 12", "DIA 13", "DIA 14", "DIA 15", "DIA 16", "DIA 17", "DIA 18", "DIA 19", "DIA 20", "DIA 21", "DIA 22", "DIA 23", "DIA 24", "DIA 25", "DIA 26", "DIA 27", "DIA 28", "DIA 29", "DIA 30"],
        datasets: [{
            label: "Sucesso",
            borderColor: gradientStroke,
            
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "gradientStroke",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: "#43a047",
            borderWidth: 4,
            data: [10, 23, 11, 5, 2, 5, 6,7, 3, 5, 1, 10, 23, 11, 5, 2, 5, 6,7, 3, 5, 7, ,7, 3, 5, 9, 10, 23, 11, 5, 2,4]
        },
        {
            label: "Erro",
            borderColor: gradientStroke,
            
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "red",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [50, 123, 45, 70,123, 45, 70, 123, 45, 70,123, 45, 70,123, 45, 70, 123, 45, 70, 123, 45, 70,34, 55, 90, 60,50,90,86,76]
        }
            

        
    ] },

        
   

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