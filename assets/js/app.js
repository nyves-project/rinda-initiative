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
    /* New Modules */
    clinicTitle:"Clinics & Care",
    clinicDesc:"Find youth-friendly clinics, book an appointment, or chat with a professional.",
    menstrualTitle:"Menstrual Health",
    menstrualDesc:"Track your period, manage pain, and find affordable reusable pads.",
    communityTitle:"Community Q&A",
    communityDesc:"Ask questions anonymously and get answers from peers and professionals.",
    rewardsTitle:"Rewards Store",
    rewardsDesc:"Redeem your quiz points for pads, soap, or internet data.",
    libraryTitle:"Resource Library",
    libraryDesc:"Official MoH and RBC health booklets for educators and youth.",
    mentalTitle:"Mental Health",
    mentalDesc:"Anonymous peer support & crisis help",
    booksTitle:"Growing Up Books",
    booksDesc:"Puberty & body guides",
    orderSmallDesc:"Order an HIV self-test kit securely",
    ussdDesc:"Dial *775# offline simulation",
    budgetTitle:"Pilot Plan & Budget",
    budgetDesc:"6-month · 10M RWF breakdown",
  },
  kin:{
    /* Dashboard — Verified Kinyarwanda (RBC / MoH Rwanda) */
    welcome:"Murakaza neza kuri Rinda",
    subtitle:"Umurinzi wawe w'ubuzima bwa Virusi itera SIDA",
    platformModules:"Gahunda z'Urubuga",
    module1:"Gutumiza Igikoresho cyo Kwipima",
    module2:"Kwiga: Gukumira Virusi itera SIDA",
    module3:"Igerageza rya akanyenyeri",
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
    setReminder:"Kwibutsa",
    reminderDesc:"Amabwiriza ya Rwanda: ipimishe buri mezi 3–6 niba ukora imibonano mpuzabitsina.",
    /* Extra modules */
    quizTitle:"Gupima Ibyago bya Virusi itera SIDA",
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
    /* New Modules */
    clinicTitle:"Amavuriro n'Ukwitaho",
    clinicDesc:"Shaka amavuriro y'urubyiruko, saba guhura na muganga, cyangwa muganire.",
    menstrualTitle:"Ubuzima bw'ukwezi k'umugore",
    menstrualDesc:"Kurikirana imihango yawe, gabanya ububabare, kandi ushake ibikoresho by'isuku.",
    communityTitle:"Ibibazo n'Ibisubizo",
    communityDesc:"Baza ibibazo mu ibanga, ubone ibisubizo kuva ku bandi n'abahanga.",
    rewardsTitle:"Isoko ry'Ibihembo",
    rewardsDesc:"Gura ibikoresho by'isuku cyangwa interineti ukoresheje amanota yawe.",
    libraryTitle:"Isomero",
    libraryDesc:"Ibitabo byemewe bya Minisante na RBC byo kwigisha ubuzima.",
    mentalTitle:"Ubuzima bwo mu Mutwe",
    mentalDesc:"Ubufasha bw'ibanga mu bihe bigoranye",
    booksTitle:"Kwiga k'ubwangavu n'ubugimbi",
    booksDesc:"Ibitabo byihariye ku bwangavu n'ubugimbi",
    orderSmallDesc:"Tumiza igikoresho cyo kwipima mu mutekano",
    ussdDesc:"Kanda *775# bose batareba",
    budgetTitle:"Gahunda n'Ingengo y'Imari",
    budgetDesc:"Amezi 6 · Miliyoni 10 RWF",
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
    
    // Skip lang-toggle container — translating it destroys listener-holding button elements
    if(el.classList.contains('lang-toggle')) return;

    // 1. Check legacy internal translations
    if(translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
      return;
    }

    // 2. Check auto-extracted dynamic dictionaries
    const dict = lang === 'kin' ? window.I18N_KIN : window.I18N_EN;
    if (dict && dict[key]) {
       el.innerHTML = dict[key];
    }
  });

  // Re-apply active class after innerHTML replacements may have reset button states
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });

  // Dynamically translate bottom nav icons across all pages
  const navTabs = {
    'nav-home': {en: '<span class="nav-icon">🏠</span>Home', kin: '<span class="nav-icon">🏠</span>Ahabanza'},
    'nav-clinic': {en: '<span class="nav-icon">🏥</span>Care', kin: '<span class="nav-icon">🏥</span>Kwivuza'},
    'nav-menstrual': {en: '<span class="nav-icon">🩸</span>Health', kin: '<span class="nav-icon">🩸</span>Ubuzima'},
    'nav-modules': {en: '<span class="nav-icon">📖</span>Learn', kin: '<span class="nav-icon">📖</span>Kwiga'},
    'nav-knowledge': {en: '<span class="nav-icon">📚</span>Hub', kin: '<span class="nav-icon">📚</span>Ubumenyi'}
  };
  for(const [id, texts] of Object.entries(navTabs)){
    const el = document.getElementById(id);
    if(el) el.innerHTML = texts[lang] + (el.classList.contains('active') ? '' : ''); 
    // Wait, need to preserve active state but innerHTML overwrites it. innerHTML doesn't affect classList on the anchor tag itself.
  }

  // set html lang attr
  document.documentElement.lang = lang === 'kin' ? 'rw' : 'en';
}

document.addEventListener('DOMContentLoaded',()=>{
  setLang(currentLang);
});

/* Use event delegation so lang buttons still work even after innerHTML replacement by i18n */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.dataset.lang) setLang(btn.dataset.lang);
});

/* ── Voice Commands ── */
let recognition = null;
let isListening = false;

function toggleVoiceCommand(){
  if(!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)){
    alert("Voice commands are not supported in your browser.");
    return;
  }
  if(isListening){
    if(recognition) recognition.stop();
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = currentLang === 'kin' ? 'rw-RW' : 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = function() {
    isListening = true;
    document.getElementById('voice-mic-btn').classList.add('recording');
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Voice Command: ", transcript);
    // Simple navigation rules based on keywords
    if(transcript.includes('home') || transcript.includes('ahabanza')) window.location.href = 'index.html';
    else if(transcript.includes('clinic') || transcript.includes('doctor') || transcript.includes('amavuriro')) window.location.href = 'clinic.html';
    else if(transcript.includes('menstrua') || transcript.includes('period') || transcript.includes('imihango')) window.location.href = 'menstrual.html';
    else if(transcript.includes('order') || transcript.includes('tumiza')) window.location.href = 'order.html';
    else if(transcript.includes('learn') || transcript.includes('read') || transcript.includes('kwiga')) window.location.href = 'modules.html';
    else if(transcript.includes('knowledge') || transcript.includes('ubumenyi')) window.location.href = 'knowledge.html';
    else alert("Command not recognized: " + transcript);
  };

  recognition.onspeechend = function() {
    recognition.stop();
  };

  recognition.onend = function() {
    isListening = false;
    const mic = document.getElementById('voice-mic-btn');
    if(mic) mic.classList.remove('recording');
  };

  recognition.onerror = function(event) {
    console.error("Speech error", event.error);
    isListening = false;
    const mic = document.getElementById('voice-mic-btn');
    if(mic) mic.classList.remove('recording');
  };

  recognition.start();
}

/* ── Global State: Points ── */
let globalPoints = parseInt(localStorage.getItem('rinda-points') || '0');
function addPoints(pts){
  globalPoints += pts;
  localStorage.setItem('rinda-points', globalPoints);
  const pDisplay = document.getElementById('global-points-display');
  if(pDisplay) pDisplay.textContent = globalPoints;
}

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

/* ── Dyslexia-Friendly Mode Toggle ── */
function toggleDyslexia(checked){
  document.body.classList.toggle('dyslexia-mode', checked);
  localStorage.setItem('rinda-dyslexia', checked ? '1' : '0');
}

/* ── Reduced Motion Toggle ── */
function toggleReducedMotion(checked){
  document.body.classList.toggle('reduced-motion', checked);
  localStorage.setItem('rinda-motion', checked ? '1' : '0');
}

/* ── Text-to-Speech (TTS) Reader ── */
let ttsInstance = null;
function toggleTTS(button, textToRead){
  if(!('speechSynthesis' in window)) return alert('Text-to-Speech not supported in your browser.');
  if(window.speechSynthesis.speaking){
    window.speechSynthesis.cancel();
    document.querySelectorAll('.tts-reader-btn').forEach(b=>{b.classList.remove('playing'); b.innerHTML='🔊 Read Aloud';});
    return;
  }
  ttsInstance = new SpeechSynthesisUtterance(textToRead);
  ttsInstance.lang = currentLang === 'kin' ? 'rw-RW' : 'en-US';
  ttsInstance.onend = () => {
    button.classList.remove('playing');
    button.innerHTML='🔊 Read Aloud';
  };
  button.classList.add('playing');
  button.innerHTML='⏸ Stop Reading';
  window.speechSynthesis.speak(ttsInstance);
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
  if(localStorage.getItem('rinda-dyslexia')==='1') document.body.classList.add('dyslexia-mode');
  if(localStorage.getItem('rinda-motion')==='1') document.body.classList.add('reduced-motion');

  const fs = localStorage.getItem('rinda-fontsize');
  if(fs) document.documentElement.style.fontSize = fs+'px';

  // Inject advanced accessibility toggles into `.access-panel` if it exists
  const accessPanel = document.getElementById('access-panel');
  if(accessPanel){
    const hintRow = accessPanel.lastElementChild;
    const extraHTML = `
      <div class="access-row">
        <span>Dyslexia Font</span>
        <label class="toggle-switch"><input type="checkbox" id="dyslexia-toggle" onchange="toggleDyslexia(this.checked)"/><span class="toggle-slider"></span></label>
      </div>
      <div class="access-row">
        <span>Reduce Motion</span>
        <label class="toggle-switch"><input type="checkbox" id="motion-toggle" onchange="toggleReducedMotion(this.checked)"/><span class="toggle-slider"></span></label>
      </div>
    `;
    if(hintRow) hintRow.insertAdjacentHTML('beforebegin', extraHTML);
  }

  // Restore checkbox states safely
  const domContrast = document.getElementById('contrast-toggle');
  if(domContrast) domContrast.checked = localStorage.getItem('rinda-contrast')==='1';
  const domDyslexia = document.getElementById('dyslexia-toggle');
  if(domDyslexia) domDyslexia.checked = localStorage.getItem('rinda-dyslexia')==='1';
  const domMotion = document.getElementById('motion-toggle');
  if(domMotion) domMotion.checked = localStorage.getItem('rinda-motion')==='1';

  // Inject TTS button into Knowledge Hub cards
  document.querySelectorAll('.knowledge-card').forEach(card => {
    if(card.querySelector('.tts-reader-btn')) return;
    const extractTitle = card.querySelector('h4')?.textContent || '';
    const extractText = card.querySelector('p:not(.k-lang-badge)')?.textContent || card.textContent || '';
    const readText = extractTitle + ". " + extractText;
    const btn = document.createElement('button');
    btn.className = 'tts-reader-btn';
    btn.innerHTML = '🔊 Read Aloud';
    btn.onclick = function(e){ e.stopPropagation(); e.preventDefault(); toggleTTS(this, readText); };
    card.appendChild(btn);
  });

  // Inject TTS button into Learn Modular Scenarios
  document.querySelectorAll('.scenario-card').forEach(card => {
    if(card.querySelector('.tts-reader-btn')) return;
    const title = card.querySelector('h4')?.textContent || '';
    const textBoxes = card.querySelectorAll('.dialogue-box');
    let storyText = title + ". ";
    textBoxes.forEach(p => storyText += p.textContent + " ");
    
    // Check if it has dialogue to read
    if(storyText.length > 20) {
      const btn = document.createElement('button');
      btn.className = 'tts-reader-btn';
      btn.innerHTML = '🔊 Read Story Aloud';
      btn.onclick = function(e){ e.stopPropagation(); e.preventDefault(); toggleTTS(this, storyText); };
      const body = card.querySelector('.scenario-body');
      if(body) body.insertBefore(btn, body.firstChild);
    }
  });

  // Clear any stale tour localStorage keys
  localStorage.removeItem('rinda-tour-active');
  localStorage.removeItem('rinda-tour-step');

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
    // Award points for completing a story quiz
    if(typeof addPoints === 'function') addPoints(15);
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

/* ── Floating Emergency SOS Button ── */
(function(){
  const sos = document.createElement('a');
  sos.href = 'tel:114';
  sos.className = 'sos-fab';
  sos.innerHTML = '🆘';
  sos.title = 'Emergency: Call 114 (Free)';
  sos.setAttribute('aria-label','Emergency helpline — call 114 free');
  sos.style.cssText = 'position:fixed;bottom:5rem;right:1rem;z-index:90;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#ff4757,#c0392b);display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 4px 18px rgba(255,71,87,0.4);text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;border:2px solid rgba(255,255,255,0.15);';
  sos.onmouseenter = ()=>{ sos.style.transform='scale(1.12)'; sos.style.boxShadow='0 6px 24px rgba(255,71,87,0.6)'};
  sos.onmouseleave = ()=>{ sos.style.transform='scale(1)'; sos.style.boxShadow='0 4px 18px rgba(255,71,87,0.4)'};
  document.body.appendChild(sos);
})();


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
