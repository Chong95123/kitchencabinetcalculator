document.getElementById("mode").addEventListener("change", function () {
  const mode = this.value;
  document.getElementById("kitchenFields").style.display = mode === "kitchen" ? "block" : "none";
  document.getElementById("cementFields").style.display = mode === "cement" ? "block" : "none";
  document.getElementById("result").textContent = '';
});

function calculate() {
  const mode = document.getElementById("mode").value;
  let total = 0;

  if (mode === "kitchen") {
    const base = +document.getElementById("baseFt").value || 0;
    const quartz = +document.getElementById("quartzFt").value || 0;
    const wallFull = +document.getElementById("wallFullFt").value || 0;
    const wallNon = +document.getElementById("wallNonFullFt").value || 0;
    const drawer = +document.getElementById("drawerSet").value || 0;
    const foam = +document.getElementById("foamSink").value || 0;
    const end = +document.getElementById("endPanel").value || 0;
    const hole = +document.getElementById("sinkHole").value || 0;

    total += base * 220;
    total += quartz * 210;
    total += wallFull * 250;
    total += wallNon * 230;
    total += drawer * 250;
    total += foam * 350;
    total += end * 150;
    total += hole * 150;
  }

  if (mode === "cement") {
    const cementFt = +document.getElementById("cementFt").value || 0;
    const pricePerFt = +document.getElementById("cementOption").value;
    total += cementFt * pricePerFt;
  }

  document.getElementById("result").textContent = "Total: RM " + total.toFixed(2);
}
