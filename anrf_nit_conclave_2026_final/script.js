const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const eventDate=new Date('2026-10-14T09:00:00+05:30').getTime();
function countdown(){const d=eventDate-Date.now();const vals={days:Math.max(0,Math.floor(d/86400000)),hours:Math.max(0,Math.floor(d/3600000)%24),minutes:Math.max(0,Math.floor(d/60000)%60),seconds:Math.max(0,Math.floor(d/1000)%60)};Object.entries(vals).forEach(([k,v])=>{const el=document.getElementById(k);if(el)el.textContent=String(v).padStart(2,'0')})}countdown();setInterval(countdown,1000);
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.day').forEach(d=>d.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.day).classList.add('active')}));
