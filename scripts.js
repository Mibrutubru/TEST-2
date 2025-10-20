document.addEventListener('DOMContentLoaded', function(){
  const annual = document.getElementById('annual');
  const price = document.getElementById('price');
  const months = document.getElementById('months');
  const btn = document.getElementById('calcBtn');
  const out = document.getElementById('calcResult');

  function format(n){return Math.round(n).toLocaleString('sk')}

  btn.addEventListener('click', ()=>{
    const a = Number(annual.value) || 0;
    const p = Number(price.value) || 1;
    const m = Number(months.value) || 12;
    const perMonth = a / m;
    const neededPerMonth = perMonth / p;
    const neededPerWeek = neededPerMonth / 4.345; // average weeks
    out.innerText = `Cieľ: ${format(a)} € ročne → ${format(perMonth)} €/mesiac. Pri cene ${format(p)} € potrebujete približne ${format(neededPerMonth)} predajov/mesiac (~${format(neededPerWeek)} / týždeň).`;
  });
});
