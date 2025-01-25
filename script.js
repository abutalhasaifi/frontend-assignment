// Validation Example
document.querySelectorAll('table button').forEach((btn) => {
    btn.addEventListener('click', () => {
      alert(`Status: ${btn.textContent}`);
    });
  });
  
  // Graph Example using Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Visitors',
        data: [100, 200, 150, 300, 400, 350],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });
  