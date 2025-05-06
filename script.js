function calculate() {
    // Per FT items
    const base = parseFloat(document.getElementById('baseFt').value) || 0;
    const quartz = parseFloat(document.getElementById('quartzFt').value) || 0;
    const wallFull = parseFloat(document.getElementById('wallFullFt').value) || 0;
    const wallNonFull = parseFloat(document.getElementById('wallNonFullFt').value) || 0;
  
    // Per Unit items
    const drawer = parseInt(document.getElementById('drawerSet').value) || 0;
    const foam = parseInt(document.getElementById('foamSink').value) || 0;
    const endPanel = parseInt(document.getElementById('endPanel').value) || 0;
    const hole = parseInt(document.getElementById('sinkHole').value) || 0;
  
    // Pricing
    const total =
      (base * 220) +
      (quartz * 210) +
      (wallFull * 250) +
      (wallNonFull * 230) +
      (drawer * 250) +
      (foam * 350) +
      (endPanel * 150) +
      (hole * 150);
  
    document.getElementById('result').innerHTML = `<h2>Total Price: RM ${total.toFixed(2)}</h2>`;
  }
  