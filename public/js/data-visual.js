var popCanvas = $("#popChart");
      var popCanvas = document.getElementById("popChart");
      var popCanvas = document.getElementById("popChart").getContext("2d");
      var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["Bombing/Explosion", "Armed Assault", "Hijacking", "Unarmed Assault", "Unknown", "Assassination", "Kidnapping", "Barricade Incident", "Facility Attack"],
    datasets: [{
      label: 'Number of Wound',
      data: [354072, 70652, 15277, 13174, 12449, 6188, 5880, 3599, 3597],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ]
    }]
  }
});

var popCanvas6 = $("#chart6");
      var popCanvas6 = document.getElementById("chart6");
      var popCanvas6 = document.getElementById("chart6").getContext("2d");
      var barChart6 = new Chart(popCanvas6, {
  type: 'bar',
  data: {
    labels: ["Iraq", "Afghanistan", "Pakistan", "Syria", "Nigeria", "Yemen"],
    datasets: [{
      label: 'Number of suicide attack',
      data: [2277, 1096, 480, 285, 265, 205],
      backgroundColor: [
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ]
    }]
  }
});