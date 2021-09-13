var ctx = document.getElementById('canvas').getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(224, 195, 155, 1)');
gradient.addColorStop(1, 'rgba(100, 100, 0,0)');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      backgroundColor: gradient,
      label: 'Numbers',
      fill: true,
      data: [12, 19, 3, 5, 2, 3],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    tension: 0.3
  }
});