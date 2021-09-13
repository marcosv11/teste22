var myChart = new Chart(document.getElementById("chartBar4"), {
    type: 'bar',
    data: {
        labels: ["Squad 1", "Squad 2", "Squad 3", "Squad 4 ", "Squad 5"],
      datasets: [
        {
          label: "Numero de erros em Agosto",
          backgroundColor: ["rgba(255, 0, 0, 0.70)", "rgba(255, 0, 0, 0.70)","rgba(255, 0, 0, 0.70)","rgba(255, 0, 0, 0.70)","rgba(255, 0, 0, 0.70)"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Erros'
      }
    }
});