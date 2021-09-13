var myChart = new Chart(document.getElementById("chartBar6"), {
    type: 'bar',
    data: {
      labels: ["Erro 1", "Erro 2", "Erro 3", "Erro 4 ", "Erro 5"],
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