/* Rinda App — Shared JS */

/* ── Language System (Full Bilingual Kinyarwanda) ── */
const translations = {
  en:{
    /* Dashboard */
    welcome:"Welcome to Rinda",
    subtitle:"Your private HIV health companion",
    platformModules:"Platform Modules",
    module1:"Self-Test Kit Order",
    module2:"Learn: HIV Prevention",
    module3:"USSD Simulator",
    module4:"Knowledge Hub",
    m1desc:"Order a discreet HIV self-test kit delivered anonymously.",
    m2desc:"Real stories, practical guides, and condom education.",
    m3desc:"Experience how *775# works — no smartphone needed.",
    m4desc:"HIV basics, myths, prevention, testing, treatment, and rights.",
    stat1:"of 15–19 year-old men never tested",
    stat2:"of 15–19 year-old women never tested",
    stat3:"This platform exists to change these numbers.",
    orderNow:"Order now →",
    start:"Start →",
    tryIt:"Try it →",
    explore:"Explore →",
    /* Reminder */
    reminderTitle:"Next HIV Test Reminder",
    setReminder:"Set a Testing Reminder",
    reminderDesc:"Rwanda guidelines: test every 3–6 months if sexually active. Never miss your next test.",
    /* Extra modules */
    quizTitle:"Risk Assessment",
    quizDesc:"5 questions → your risk level",
    impactTitle:"Impact Dashboard",
    impactDesc:"Live platform metrics",
    certTitle:"Certificate",
    certDesc:"Complete all learning quizzes to unlock",
    /* Helpline */
    helplineTitle:"Rwanda Toll-Free Helpline",
    helplineDesc:"Free counseling & guidance",
    /* Order page */
    orderPageTitle:"Order HIV Self-Test Kit",
    orderPageDesc:"No name or ID required. Delivered by a trained peer agent in unmarked packaging.",
    /* Learn page */
    learnTitle:"Learn About HIV Prevention",
    learnSubtitle:"Real stories. Practical guides. Everything you need to protect yourself and your partner.",
    /* Knowledge Hub */
    hubTitle:"HIV Knowledge Hub",
    hubSubtitle:"Everything you need to know about HIV — facts, myths, prevention, treatment, and your rights.",
  },
  kin:{
    /* Dashboard — Verified Kinyarwanda (RBC / MoH Rwanda) */
    welcome:"Murakaza neza kuri Rinda",
    subtitle:"Umurinzi wawe w'ubuzima bwa Virusi itera SIDA",
    platformModules:"Gahunda z'Urubuga",
    module1:"Gutumiza Igikoresho cyo Kwipima",
    module2:"Kwiga: Gukumira Virusi itera SIDA",
    module3:"Igerageza rya USSD",
    module4:"Ubumenyi",
    m1desc:"Tumiza igikoresho cyo kwipima Virusi itera SIDA. Kigezwa iwanyu mu ibanga.",
    m2desc:"Inkuru z'ukuri, amabwiriza, no kwiga ibijyanye n'agakingirizo.",
    m3desc:"Reba uko *775# ikora — nta telefone ya mudasobwa irakenewe.",
    m4desc:"Ibijyanye na Virusi itera SIDA: ibintu by'ibanze, ibinyoma, gukumira, kwipima, n'uburenganzira.",
    stat1:"by'abahungu b'imyaka 15–19 batigeze bipima",
    stat2:"by'abakobwa b'imyaka 15–19 batigeze bipima",
    stat3:"Uru rubuga rwashyizweho guhindura ibi bibare.",
    orderNow:"Tumiza →",
    start:"Tangira →",
    tryIt:"Gerageza →",
    explore:"Shakisha →",
    /* Reminder */
    reminderTitle:"Igihe cyo Kwipima",
    setReminder:"Shyiraho Urukurikirane rwo Kwipima",
    reminderDesc:"Amabwiriza ya Rwanda: ipimishe buri mezi 3–6 niba uri mu mibanire.",
    /* Extra modules */
    quizTitle:"Gupima Ibyago",
    quizDesc:"Ibibazo 5 → urwego rw'ibyago byawe",
    impactTitle:"Imibare y'Ingaruka",
    impactDesc:"Imibare y'urubuga mu gihe nyacyo",
    certTitle:"Icyemezo",
    certDesc:"Rangiza ibibazo byose kugira ngo ubone",
    /* Helpline */
    helplineTitle:"Telefone y'Ubuntu ya Rwanda",
    helplineDesc:"Ubujyanama n'ubuyobozi ku buntu",
    /* Order page */
    orderPageTitle:"Gutumiza Igikoresho cyo Kwipima",
    orderPageDesc:"Nta zina cyangwa indangamuntu bisabwa. Kizanwa n'umunyamwuga mu gipfunyika kitagaragaza.",
    /* Learn page */
    learnTitle:"Kwiga Gukumira Virusi itera SIDA",
    learnSubtitle:"Inkuru z'ukuri. Amabwiriza y'ingenzi. Ibyo ukeneye byose kugira ngo wirinde.",
    /* Knowledge Hub */
    hubTitle:"Ubumenyi ku Bijyanye na Virusi itera SIDA",
    hubSubtitle:"Ibyo ukeneye kumenya byose: ibintu by'ibanze, ibinyoma, gukumira, kuvura, n'uburenganzira bwawe.",
  }
};

let currentLang = localStorage.getItem('rinda-lang') || 'en';

function setLang(lang){
  currentLang = lang;
  localStorage.setItem('rinda-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang] && translations[lang][key] !== undefined)
      el.textContent = translations[lang][key];
  });
  // set html lang attr
  document.documentElement.lang = lang === 'kin' ? 'rw' : 'en';
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.addEventListener('click',()=>setLang(b.dataset.lang));
  });
  setLang(currentLang);
});

/* ── Accessibility Panel ── */
let accessOpen = false;
function toggleAccessPanel(){
  accessOpen = !accessOpen;
  const panel = document.getElementById('access-panel');
  if(panel) panel.classList.toggle('open', accessOpen);
  const btn = document.querySelector('.access-btn');
  if(btn) btn.setAttribute('aria-expanded', accessOpen);
}

/* ── High Contrast Toggle ── */
function toggleContrast(checked){
  document.body.classList.toggle('high-contrast', checked);
  localStorage.setItem('rinda-contrast', checked ? '1' : '0');
}

/* ── Font Size ── */
let fontSize = parseInt(localStorage.getItem('rinda-fontsize') || '16');
function setFontSize(size){
  fontSize = Math.min(22, Math.max(14, size));
  document.documentElement.style.fontSize = fontSize+'px';
  localStorage.setItem('rinda-fontsize', fontSize);
}

/* ── Apply stored prefs on load ── */
document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('rinda-contrast')==='1') document.body.classList.add('high-contrast');
  const fs = localStorage.getItem('rinda-fontsize');
  if(fs) document.documentElement.style.fontSize = fs+'px';

  // Restore contrast checkbox state
  const toggle = document.getElementById('contrast-toggle');
  if(toggle) toggle.checked = localStorage.getItem('rinda-contrast')==='1';

  // scroll animations
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

  // restore completed scenario status icons
  completedScenarios.forEach(id=>{
    const statusEl = document.getElementById('status-'+id);
    if(statusEl) statusEl.textContent = '\u2705';
  });
  updateProgress();
});

/* ── USSD Simulator ── */
const ussdData = {
  home:{
    header:"*775# — Rinda Health",
    body:"Murakaza neza kuri Rinda\n(Welcome to Rinda)\n\n1. Kwipima SIDA (HIV Test)\n2. Kwiga (Learn)\n3. Gutumiza Igikoresho (Order Kit)\n4. Ivuriro rya Hafi (Nearest Clinic)\n5. Ubujyanama (Counseling)\n\n0. Garuka (Back)"
  },
  '1':{header:"Kwipima SIDA",body:"Kwipima Virusi itera SIDA\n(HIV Self-Test)\n\n☑ Wiyipima mu rugo\n  (Test yourself at home)\n☑ Ibisubizo mu minota 20\n  (Results in 20 minutes)\n☑ Ibanga ryawe rirabikwa\n  (Your privacy is protected)\n☑ Bisubiranyeho bwose\n  (Completely confidential)\n\n1. Gutumiza Igikoresho (Order kit)\n2. Soma ibisubizo (How to read results)\n0. Garuka (Back)"},
  '2':{header:"Kwiga — Ubumenyi",body:"Ubumenyi bwo Kwirinda SIDA\n(HIV Prevention Knowledge)\n\n📚 Virusi itera SIDA ni iki?\n   (What is HIV?)\n📚 Ibinyoma bikunze kwumvikana\n   (Common myths)\n📚 Gukumira SIDA (Prevention)\n📚 Agakingirizo gakoresha ite?\n   (How to use a condom)\n\n1. Tangira Kwiga (Start learning)\n0. Garuka (Back)"},
  '3':{header:"Gutumiza Igikoresho",body:"Gutumiza Igikoresho cyo Kwipima\n(Order HIV Self-Test Kit)\n\n🔒 Nta mazina asabwa\n   (No name required)\n📦 Tuzazana aho uri\n   (We deliver to you)\n⏱ Amasaa 24–48\n   (24–48 hours delivery)\n🆓 Ubuntu — Kubura ku giciro\n   (Free of charge)\n\n1. Ohereza Segiteri (Send sector)\n0. Garuka (Back)"},
  '4':{header:"Ivuriro rya Hafi",body:"Ivuriro rya Hafi Yawe\n(Nearest Health Centre)\n\n📍 Kigali: CHUK — 0km\n📍 Amajyepfo: Butare — 16km\n📍 Iburengerazuba: Kibuye — 40km\n📍 Amajyaruguru: Ruhengeri — 25km\n\n📞 Inomero ya Buhere: 3456\n   (Free hotline)\n\n0. Garuka (Back)"},
  '5':{header:"Ubujyanama",body:"Serivisi y'Ubujyanama\n(HIV Counseling Service)\n\n👤 Ibanga ryawe rirabikwa\n   (Your identity protected)\n🕐 Amasaa 24 ku munsi\n   (Available 24 hours/day)\n💬 Ikinyarwanda / Icyongereza\n   (Kinyarwanda / English)\n🆓 Ubuntu / Free\n\n1. Saba Umujyanama (Request counselor)\n0. Garuka (Back)"},
  '1-1':{header:"Gutumiza Byagenze!",body:"Igikoresho Cyatumijwe!\n(Kit Ordered Successfully!)\n\n✅ Igikoresho cyawe cyatumijwe\n   (Your kit has been ordered)\n\n🔢 Nomero: RND-" + Math.floor(10000+Math.random()*90000) + "\n\n📞 Tuzakuvugisha vuba\n   (We will contact you soon)\n⏱ Amasaa 24–48\n\n0. Garuka (Back)"}
};

let ussdStack = ['home'];
function ussdNavigate(input){
  const current = ussdStack[ussdStack.length-1];
  if(input==='0'){ if(ussdStack.length>1) ussdStack.pop(); }
  else {
    const key = current==='home' ? input : current+'-'+input;
    if(ussdData[key]) ussdStack.push(key);
    else if(ussdData[input]) ussdStack.push(input);
  }
  renderUSSD();
}

function renderUSSD(){
  const key = ussdStack[ussdStack.length-1];
  const data = ussdData[key] || ussdData.home;
  const header = document.getElementById('ussd-header');
  const body = document.getElementById('ussd-body');
  if(header) header.textContent = data.header;
  if(body){
    body.innerHTML = '';
    data.body.split('\n').forEach(line=>{
      if(/^\d+\./.test(line.trim())){
        const opt = document.createElement('span');
        opt.className='opt'; opt.textContent=line;
        opt.onclick=()=>{ const num=line.trim().match(/^(\d+)/)[1]; ussdNavigate(num); };
        body.appendChild(opt);
      } else {
        const span = document.createElement('span');
        span.textContent=line+'\n'; body.appendChild(span);
      }
    });
  }
  const inp = document.getElementById('ussd-input');
  if(inp) inp.value='';
}

/* ── Negotiation Module Logic ── */
let completedScenarios = JSON.parse(localStorage.getItem('rinda-scenarios') || '[]');
let audioIntervals = {};

function toggleScenario(id){
  const body = document.getElementById('scenario-body-'+id);
  const all = document.querySelectorAll('.scenario-body');
  all.forEach(b=>{ if(b.id!=='scenario-body-'+id) b.classList.remove('open'); });
  if(body) body.classList.toggle('open');
}

function togglePlay(id){
  const btn = document.getElementById('play-btn-'+id);
  const bar = document.getElementById('audio-progress-'+id);
  if(!btn || !bar) return;
  const isPlaying = btn.textContent==='⏸';
  if(isPlaying){
    btn.textContent='▶';
    clearInterval(audioIntervals[id]);
  } else {
    btn.textContent='⏸';
    let w = parseFloat(bar.style.width)||0;
    audioIntervals[id] = setInterval(()=>{
      w += 0.5;
      bar.style.width=Math.min(w,100)+'%';
      if(w>=100){ clearInterval(audioIntervals[id]); btn.textContent='▶'; bar.style.width='100%'; }
    },100);
  }
}

function answerQuiz(scenarioId, clickedIdx){
  const quizEl = document.getElementById('quiz-'+scenarioId);
  if(!quizEl) return;
  const correctIdx = parseInt(quizEl.dataset.correct || '0');
  const opts = quizEl.querySelectorAll('.quiz-option');
  if([...opts].some(o=>o.disabled)) return;
  opts.forEach((o,i)=>{
    o.disabled = true;
    if(i === correctIdx) o.classList.add('correct');
    else if(i === clickedIdx) o.classList.add('wrong');
  });
  const statusEl = document.getElementById('status-'+scenarioId);
  if(statusEl) statusEl.textContent = '✅';
  if(!completedScenarios.includes(scenarioId)){
    completedScenarios.push(scenarioId);
    localStorage.setItem('rinda-scenarios', JSON.stringify(completedScenarios));
    updateProgress();
  }
}

function updateProgress(){
  const pct = Math.round((completedScenarios.length/3)*100);
  const fill = document.getElementById('module-progress-fill');
  const label = document.getElementById('module-progress-pct');
  if(fill) fill.style.width=pct+'%';
  if(label) label.textContent=pct+'%';
}

function resetProgress(){
  completedScenarios = [];
  localStorage.removeItem('rinda-scenarios');
  updateProgress();
  document.querySelectorAll('.quiz-option').forEach(btn=>{ btn.disabled=false; btn.classList.remove('correct','wrong'); });
  [1,2,3].forEach(id=>{ const el=document.getElementById('status-'+id); if(el) el.textContent='▶'; });
  document.querySelectorAll('.scenario-body').forEach(b=>b.classList.remove('open'));
  const banner = document.getElementById('cert-unlock-banner');
  if(banner) banner.classList.remove('show');
}

/* ── Knowledge Hub Filters ── */
function filterKnowledge(tag){
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active', c.dataset.tag===tag));
  document.querySelectorAll('.knowledge-card').forEach(card=>{
    if(tag==='all') card.style.display='block';
    else card.style.display = card.dataset.tag===tag ? 'block':'none';
  });
}

/* ── Back to Top ── */
(function(){
  const btn = document.createElement('button');
  btn.className='back-to-top'; btn.innerHTML='↑'; btn.title='Back to top';
  btn.setAttribute('aria-label','Scroll to top');
  btn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  document.body.appendChild(btn);
  window.addEventListener('scroll',()=>btn.classList.toggle('show', window.scrollY>400), {passive:true});
})();

/* ── Guided Demo Tour ── */
const demoSteps = [
  { icon:'🛡️', title:'Welcome to the Rinda Demo', desc:'This guided tour walks you through all key features in about 2 minutes. Perfect for judges and new visitors. Use the buttons below to navigate.' },
  { icon:'🧪', title:'Risk Assessment Quiz', desc:'Take a 5-question anonymous quiz to get a personalised HIV risk score — Low, Moderate, or High — with immediate action steps. All data stays on your device.', link:'quiz.html', linkText:'Try the Quiz →' },
  { icon:'📖', title:'Learn: Real HIV Stories', desc:'Three real stories featuring Rwandan youth (Grace, Jean & Diane, Patrick) with embedded knowledge quizzes. Complete all 3 to unlock your Certificate of Empowerment.', link:'modules.html', linkText:'Read Stories →' },
  { icon:'📚', title:'Growing Up Books', desc:'New! Comprehensive guides on puberty, menstruation, health, and relationships for girls and boys. Authentic information designed specifically for Rwanda\'s youth.', link:'modules.html?tab=books', linkText:'Read Books →' },
  { icon:'📦', title:'Order a Self-Test Kit', desc:'No name, no ID required. Select your sector, confirm consent — a trained peer agent delivers in plain packaging within 24–48 hours. Completely anonymous.', link:'order.html', linkText:'See Order Flow →' },
  { icon:'📟', title:'USSD for Basic Phones', desc:'Dial *775# on any phone — no smartphone or data needed. All services available in Kinyarwanda via USSD, reaching Rwanda\'s 15M+ basic-phone users.', link:'ussd.html', linkText:'Try USSD Simulator →' },
  { icon:'📚', title:'Knowledge Hub', desc:'20 medically-verified cards across 6 categories. Audio read-aloud for low-literacy and visually impaired users. Search and filter by topic.', link:'knowledge.html', linkText:'Browse Hub →' },
];

let demoStep = 0;
let demoEl = null;

function startDemo(stepIdx = 0){
  if(!demoEl){
    demoEl = document.createElement('div');
    demoEl.className='demo-overlay';
    demoEl.innerHTML=`
      <div class="demo-card">
        <div class="demo-step-indicator" id="demo-dots"></div>
        <span class="demo-icon" id="demo-icon"></span>
        <div class="demo-title" id="demo-title"></div>
        <div class="demo-desc" id="demo-desc"></div>
        <div class="demo-actions">
          <button class="demo-btn skip" onclick="closeDemoOrSkip()">✕ Skip Tour</button>
          <button class="demo-btn next" id="demo-next-btn" onclick="demoNext()">Next →</button>
        </div>
      </div>`;
    document.body.appendChild(demoEl);
  }
  demoStep = stepIdx;
  localStorage.setItem('rinda-tour-active', 'true');
  localStorage.setItem('rinda-tour-step', demoStep);
  renderDemoStep();
  demoEl.classList.add('active');
}

function renderDemoStep(){
  const step = demoSteps[demoStep];
  document.getElementById('demo-icon').textContent = step.icon;
  document.getElementById('demo-title').textContent = step.title;
  document.getElementById('demo-desc').textContent = step.desc;
  const nextBtn = document.getElementById('demo-next-btn');
  const isLast = demoStep >= demoSteps.length - 1;
  nextBtn.textContent = isLast ? '✅ Done' : (step.linkText || 'Next →');
  
  nextBtn.onclick = ()=>{
    if(isLast) {
      closeDemoOrSkip();
    } else if(step.link) {
      // Save next step before navigating
      localStorage.setItem('rinda-tour-step', demoStep + 1);
      window.location.href = step.link;
    } else {
      demoNext();
    }
  };

  // dots
  const dotsEl = document.getElementById('demo-dots');
  if(dotsEl){
    dotsEl.innerHTML = '';
    demoSteps.forEach((_,i)=>{
      const d = document.createElement('div');
      d.className='demo-dot' + (i<demoStep?' done':i===demoStep?' active':'');
      dotsEl.appendChild(d);
    });
  }
}

function demoNext(){
  if(demoStep < demoSteps.length - 1){ 
    demoStep++; 
    localStorage.setItem('rinda-tour-step', demoStep);
    renderDemoStep(); 
  }
}

function closeDemoOrSkip(){
  if(demoEl) demoEl.classList.remove('active');
  localStorage.setItem('rinda-tour-active', 'false');
}

/* Inject demo FAB and handle resume tour */
document.addEventListener('DOMContentLoaded',()=>{
  const fab = document.createElement('button');
  fab.className='demo-fab'; fab.innerHTML='▶ Guided Tour';
  fab.setAttribute('aria-label','Start guided demo tour');
  fab.onclick=()=>startDemo(0);
  document.body.appendChild(fab);

  // Resume tour if active
  if(localStorage.getItem('rinda-tour-active') === 'true'){
    const savedStep = parseInt(localStorage.getItem('rinda-tour-step') || '0');
    if(savedStep < demoSteps.length){
      // small delay to prevent animation collisions
      setTimeout(()=>startDemo(savedStep), 500);
    }
  }
});

/* ── Share Modal ── */
function openShareModal(title, text, url){
  let modal = document.getElementById('share-modal-global');
  if(!modal){
    modal = document.createElement('div');
    modal.id='share-modal-global';
    modal.className='share-modal';
    modal.innerHTML=`
      <div class="share-modal-card">
        <div style="font-size:2rem;margin-bottom:.75rem">📤</div>
        <h3 id="smc-title">Share</h3>
        <p id="smc-desc">Spread the word about Rinda</p>
        <div class="share-btns">
          <a class="share-btn whatsapp" id="smc-wa" target="_blank" rel="noopener">
            <span style="font-size:1.3rem">💬</span><span>Share via WhatsApp</span>
          </a>
          <button class="share-btn" id="smc-copy" onclick="copyShareLink()">
            <span style="font-size:1.3rem">📋</span><span>Copy link to clipboard</span>
          </button>
          <a class="share-btn" id="smc-native" style="display:none" href="#">
            <span style="font-size:1.3rem">📱</span><span>Share via phone</span>
          </a>
        </div>
        <button class="share-btn-close" onclick="closeShareModal()">✕ Close</button>
      </div>`;
    document.body.appendChild(modal);
  }
  const shareUrl = url || window.location.href;
  const shareText = text || 'Check out the Rinda Initiative — HIV prevention platform for Rwanda\'s youth.';
  document.getElementById('smc-title').textContent = title || 'Share Rinda';
  document.getElementById('smc-desc').textContent = shareText;
  document.getElementById('smc-wa').href = 'https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + shareUrl);
  document.getElementById('smc-copy').dataset.url = shareUrl;
  document.getElementById('smc-copy').dataset.text = shareText;

  if(navigator.share){
    const nativeBtn = document.getElementById('smc-native');
    nativeBtn.style.display='flex';
    nativeBtn.onclick = (e)=>{ e.preventDefault(); navigator.share({title: title||'Rinda', text: shareText, url: shareUrl}).catch(()=>{}); };
  }
  modal.classList.add('open');
}

function closeShareModal(){ const m=document.getElementById('share-modal-global'); if(m) m.classList.remove('open'); }
function copyShareLink(){
  const btn=document.getElementById('smc-copy');
  const text=(btn.dataset.text||'')+' '+(btn.dataset.url||window.location.href);
  navigator.clipboard.writeText(text).then(()=>{
    btn.querySelector('span:last-child').textContent='✅ Copied!';
    setTimeout(()=>btn.querySelector('span:last-child').textContent='Copy link to clipboard',2000);
  });
}
