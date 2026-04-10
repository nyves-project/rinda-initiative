/* Rinda Initiative — Landing Page JS */

/* ── Particle Canvas ── */
(function(){
  const canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);

  const colors = ['rgba(0,160,220,', 'rgba(250,210,1,', 'rgba(29,185,84,'];
  for(let i=0;i<60;i++){
    particles.push({
      x: Math.random()*1920, y: Math.random()*1080,
      r: Math.random()*2+0.5, vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
      color: colors[Math.floor(Math.random()*colors.length)], o: Math.random()*0.6+0.2
    });
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x=W; if(p.x>W) p.x=0;
      if(p.y<0) p.y=H; if(p.y>H) p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color+p.o+')'; ctx.fill();
    });
    // draw connecting lines
    particles.forEach((a,i)=>{
      particles.slice(i+1).forEach(b=>{
        const d = Math.hypot(a.x-b.x,a.y-b.y);
        if(d<120){
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle = 'rgba(0,160,220,'+(0.15*(1-d/120))+')';
          ctx.lineWidth=0.5; ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Scroll Animations (Intersection Observer) ── */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
},{threshold:0.15});
document.querySelectorAll('.fade-in,.slide-in-left').forEach(el=>observer.observe(el));

/* ── Stat Counter Animation ── */
function animateCounter(el){
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  function update(now){
    const progress = Math.min((now-start)/duration,1);
    const eased = 1-Math.pow(1-progress,3);
    const val = target*eased;
    el.textContent = (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
    if(progress<1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting && e.target.dataset.target){
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('[data-target]').forEach(el=>counterObs.observe(el));

/* ── Impact Bar Animation ── */
const barObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.impact-bar-fill').forEach(bar=>{
        setTimeout(()=>{ bar.style.width = bar.dataset.width+'%'; },200);
      });
      barObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
const barsContainer = document.getElementById('impact-bars-container');
if(barsContainer) barObs.observe(barsContainer);

/* ── Data Table Tabs ── */
function switchTab(id){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  const panel = document.getElementById('tab-'+id);
  const btn = document.getElementById('btn-'+id);
  if(panel){ panel.classList.add('active'); }
  if(btn){ btn.classList.add('active'); btn.setAttribute('aria-selected','true'); }
}

/* ── Smooth reveal hero stats ── */
window.addEventListener('load',()=>{
  document.querySelectorAll('.hero-stat').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('visible'),800+i*150);
  });
});

/* ── Hamburger / Mobile Nav ── */
function toggleNav(){
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('hamburger');
  if(!nav||!btn) return;
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}
// Close nav when a link is clicked
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('#nav-links a').forEach(a=>{
    a.addEventListener('click',()=>{
      const nav = document.getElementById('nav-links');
      const btn = document.getElementById('hamburger');
      if(nav) nav.classList.remove('open');
      if(btn){ btn.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    });
  });
});

/* ── Chart Bar Animations ── */
const chartObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.chart-bar-fill').forEach((bar,i)=>{
        setTimeout(()=>bar.classList.add('animated'), i*120);
      });
      chartObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
document.querySelectorAll('.chart-item').forEach(el=>chartObs.observe(el));

/* ── Scroll Spy ── */
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= (sectionTop - 150)) {
      current = '#' + section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
    }
  });
});
